// Initialize modules
const { src, dest, watch, series, parallel } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const babel = require("gulp-babel");
const terser = require("gulp-terser");
const postcssImport = require("postcss-import");
const browsersync = require("browser-sync").create();

// Sass Tasks
function mainScssTask() {
  return src("src/styles/main.scss", { sourcemaps: true })
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest("dist", { sourcemaps: "." }));
}

function vendorScssTask() {
  return src("src/styles/vendor.scss", { sourcemaps: true })
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([postcssImport(), autoprefixer(), cssnano()]))
    .pipe(dest("dist", { sourcemaps: "." }));
}

// JavaScript Task
function customJsTask() {
  return src("src/scripts/custom.js", { sourcemaps: true })
    .pipe(babel({ presets: ["@babel/preset-env"] }))
    .pipe(terser())
    .pipe(dest("dist", { sourcemaps: "." }));
}

function vendorJsTask() {
  return src("src/scripts/vendor.js", { sourcemaps: true })
    .pipe(babel({ presets: ["@babel/preset-env"] }))
    .pipe(terser())
    .pipe(dest("dist", { sourcemaps: "." }));
}

// Browsersync
function browserSyncServe(cb) {
  browsersync.init({
    server: {
      baseDir: ".",
    },
    notify: {
      styles: {
        top: "auto",
        bottom: "0",
      },
    },
  });
  cb();
}
function browserSyncReload(cb) {
  browsersync.reload();
  cb();
}

// Watch Task
function watchTask() {
  watch("*.html", browserSyncReload);
  watch(
    ["src/styles/**/*.scss", "src/scripts/**/*.js"],
    series(
      parallel(mainScssTask, vendorScssTask),
      parallel(customJsTask, vendorJsTask),
      browserSyncReload
    )
  );
}

// Default Gulp Task
exports.default = series(
  parallel(mainScssTask, vendorScssTask),
  parallel(customJsTask, vendorJsTask),
  browserSyncServe,
  watchTask
);

// Build Gulp Task
exports.build = series(
  parallel(mainScssTask, vendorScssTask),
  parallel(customJsTask, vendorJsTask)
);
