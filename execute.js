function execute(func){
  var code = `return(${func})()`;
  var newFunc = new Function(code);
  newFunc();
}