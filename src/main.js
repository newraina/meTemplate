function meTemplate(tpl, data) {
    var re = /{%[\s?]+([^&}]+)?[\s?]+%}/g;
    var result = tpl.replace(re, function (p0, p1) {
        return data[p1];
    });
    return result;
}

var tpl = '<p>my name is {% name %}, i\'m {% age %} years old.</p>';

console.log(meTemplate(tpl, {name: 'Tom', age: 18}));
