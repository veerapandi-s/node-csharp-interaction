require('dotenv').config()

var edge = require('edge-js');

var subtractMethod = edge.func({
  assemblyFile: 'assets/ClassLibrary1.dll',
  typeName: 'ClassLibrary1.Class1',
  methodName: 'Subtract' // This must be Func<object,Task<object>>
});

var payLoad = {
  num1: 15,
  num2: 4
}

subtractMethod(payLoad, function (error:any, result:any) {
  if (error) throw error;
  console.log(result);
});

var add = edge.func(require('path').join(__dirname, 'assets/add.csx'));

add(payLoad, function (error:any, result:any) {
  if (error) throw error;
  console.log(result);
});