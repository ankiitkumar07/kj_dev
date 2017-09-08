CKEDITOR.editorConfig = function (config) {
  // ... other configuration ...

  config.toolbar_mini = [
    ["Bold",  "Italic",  "Underline",  "Strike",  "-",  "Subscript",  "Superscript"],
  ];
  config.toolbar = "mini";

  // ... rest of the original config.js  ...
}

CKEDITOR.editorConfig = function (config) {
  // ... other configuration ...

  config.removePlugins = 'resize';
  config.height = 600;
  config.width = '100%';
  config.startupMode = 'source';
}