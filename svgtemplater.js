function icon(name, params, options) {
  var params = params || {};
  var options = options || {};
  var className = options.className ? options.className : 'icon';
  var size = params.size ? ' ' + className + '-' + params.size : '';
  var classes = className + ' ' + className + '-' + name + size + ' ' + (params.class || '');
  classes = classes.trim();

  var icon =  '<svg class=\'' + className + '-svg\'>' +
      '<use xlink:href=\'' + (options.path ? options.path : '') + '#' + name + '\' />' +
      '</svg>';

  var html =  '<div class=\'' + classes + '\'>' + icon + '</div>';

  return html;
}

function buildParamsFromString(string) {
  var match, attr, value;
  var params = {};
  var attrsRegexp = /(\S+)=[\\"']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/gi;

  while (match = attrsRegexp.exec(string)) {
    attr  = match[1];
    value = match[2].replace(/'|"/, '');
    params[attr] = value;
  }

  return params;
}

function replaceIconTags(src, options) {
  var match, tag, params, name;
  var html = src.toString();
  var iconRegexp = /<icon\s+([\\\-=\w\d'"\s]+)\s*\/?>(<\/icon>)?/gi;

  while (match = iconRegexp.exec(html)) {
    tag     = match[0];
    params  = buildParamsFromString(match[1]);
    name    = params.name;

    delete params.name;

    html = html.replace(tag, icon(name, params, options));
  }

  return html;
}

module.exports = {
  replaceIconTags: replaceIconTags,
  buildParamsFromString: buildParamsFromString,
  icon: icon
};
