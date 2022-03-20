/**
 * Project name(项目名称)：JS_type_conversion
 * File name(文件名): test2
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/20
 * Time(创建时间)： 18:40
 * Version(版本): 1.0
 * Description(描述)： 2. JS 强制类型转换
 */
document.write("<br>");
document.write(Number("22.89"));
document.write("<br>");
document.write(Number(true));
document.write("<br>");
document.write(Number(false));
document.write("<br>");
document.write(Number(null));
document.write("<br>");

// 如果参数中只包含数字，将转换为十进制数字，忽略前导 0 以及前导空格，如果数字前面有负（-）号，那么-会保留在转换结果中，如果数字前面有加（+）号，转换后会删掉+号；
// 如果参数中包含有效浮点数字，将转换为对应的浮点数字，忽略前导 0 以及前导空格，同样对于数字前的正负号，会保留负号忽略正号；
// 如果参数中包含有效的十六进制数字，将转换为对应大小的十进制数字；
// 如果参数为空字符串，将转换为 0；
// 如果参数为布尔值，则将 true 转换为 1，将 false 转换为 0；
// 如果参数为 null，将转换为 0；
// 如果参数为 undefined，将转换为 NaN；
// 如果参数为 Date 对象，将转换为从 1970 年 1 月 1 日到执行转换时的毫秒数；
// 如果参数为函数、包含两个元素以上的数组对象以及除 Date 对象以外的其他对象，将转换为 NaN；
// 如果在参数前面包含了除空格、+和-以外的其他特殊符号或非数字字符，或在参数中间包含了包括空格、+和-的特殊符号或非数字字符，将转换为 NaN。
document.write("<br>");
document.write(parseInt("1101",2));
document.write("<br>");
document.write(parseInt("a37f",16));
document.write("<br>");
document.write(parseInt("123"));
document.write("<br>");
document.write(parseInt("  123"));
document.write("<br>");

document.write("<br>");
document.write(parseFloat("3.456"));
document.write("<br>");
document.write(parseFloat("-3.12"));
document.write("<br>");
document.write(parseFloat("+3.12"));
document.write("<br>");
document.write(parseFloat(".12"));
document.write("<br>");