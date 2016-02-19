function meTemplate(tpl, data) {
    var re     = /{%[\s?]+([^&}]+)?[\s?]+%}/g;
    var code   = 'var r=[];\n';
    var cursor = 0;
    var match;

    function add(line, js) {
        code += js ? 'r.push(' + line.replace(/"/g, '\"') + ');\n' : 'r.push("' + line.replace(/"/g, '\"') + '");\n';
    }

    while (match = re.exec(tpl)) {
        add(tpl.slice(cursor, match.index));
        add(match[1], true);
        cursor = match.index + match[0].length;
    }
    add(tpl.slice(cursor));
    code += 'return r.join("");';

    return (new Function(code.replace(/[\r\t\n]/g, '')).bind(data))();

}

var tpl = '<p>my name is {% this.name %}, i\'m {% this.age %} years old.</p>';

console.log(meTemplate(tpl, {name: 'Tom', age: 18}));
