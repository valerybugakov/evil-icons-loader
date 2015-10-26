var loaderUtils = require('loader-utils')
var svgTemplater = require('./svgtemplater.js')

module.exports = function (source) {
  this.cacheable && this.cacheable();
  var query = loaderUtils.parseQuery(this.query);
  res = svgTemplater.replaceIconTags(source, {
    path: '',
    className: query.className ? query.className : 'iconsvg'
  })
  return res
};
