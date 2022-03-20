/**
 * Project name(项目名称)：JS_type_conversion
 * File name(文件名): test1
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/20
 * Time(创建时间)： 18:36
 * Version(版本): 1.0
 * Description(描述)： 1. JS 隐式类型转换
 隐式转换就是自动转换，通常发生在一些数学运算中。因为 JavaScript 是一种弱类型的语言，在一个表达式中，运算符两边的类型可以不同
 JavaScript 中，表达式中包含以下运算符时，会发生隐式类型转换：
 算术运算符：加（+）、减（-）、乘（*）、除（/）、取模（%）；
 逻辑运算符：逻辑与（&&）、逻辑或（||）、逻辑非（!）；
 字符串运算符：+、+=。

 */

document.write("3" - 2);
document.write("<br>");
document.write("3" + 2);
document.write("<br>");
document.write(3 + "2");
document.write("<br>");
document.write("3" * "2");
document.write("<br>");
document.write("10" / "2");
document.write("<br>");
document.write(1 + true);
document.write("<br>");
document.write(1 + false);
document.write("<br>");
document.write(1 + undefined);
document.write("<br>");
document.write(3 + null);
document.write("<br>");
document.write("3" + null);
document.write("<br>");
document.write(true + null);
document.write("<br>");
document.write(true + undefined);
document.write("<br>");

// 字符串加数字，数字会转换为字符串；
// 数字减字符串，字符串会转换为数字，如果字符串无法转换为数字（例如"abc"、"JavaScript"），则会转换为 NaN；
// 字符串减数字，字符串会转换为数字，如果字符串无法转换为数字，则会转换为 NaN；
// 乘、除运算时，也会先将字符串转换为数字。