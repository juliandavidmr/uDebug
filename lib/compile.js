var bash = require("./bash");

/**
 * Return cmd string command compilation C linux
 * @param {string} name_file 
 */
var cmd_compile_c_linux = function (name_file) {
  var out_name = name_file;
  if (name_file.endsWith(".c")) {
    out_name = name_file.substring(0, name_file.length - 2);
  }
  return `gcc ${name_file} -o ${out_name}`;
}

/**
 * Return cmd string command compilation Cpp linux
 * @param {string} name_file 
 */
var cmd_compile_cpp_linux = function (name_file, out_name) {
  if (!out_name) {
    if (name_file.endsWith(".cpp")) {
      out_name = name_file.substring(0, name_file.length - 4);
    }
  }
  return `g++ ${name_file} -o ${out_name}`;
}

/**
 * Return cmd string command compilation Cpp windows
 * @param {string} name_file 
 */
var cmd_compile_cpp_win = function (name_file) {
  var out_name = name_file;
  if (name_file.endsWith(".cpp")) {
    out_name = name_file.substring(0, name_file.length - 3);
  }
  return `g++ ${name_file} -o ${out_name}`;
}

/**
 * Return cmd string command compilation Cpp windows
 * @param {string} name_file 
 */
var cmd_compile_java = function (name_file) {
  return `javac ${name_file}`;
}

//-----------------------------------------------------------

/**
 * Compile cpp
 * @param {string} dirname_file
 */
exports.cpp = function (dirname_file, out_name) {
  var cmd = cmd_compile_cpp_linux(dirname_file, out_name);
  return bash(cmd);
}

/**
 * Compile Java
 * @param {string} dirname_file
 */
exports.java = function (dirname_file) {
  var cmd = cmd_compile_java(dirname_file);
  return bash(cmd);
}