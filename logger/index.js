'use strict';

function Logger(kind) {
  const logger = Logger.loggers[kind];
  if (logger) return logger;
  this.kind = kind || 'message';
  this.color = Logger.colors[this.kind];
  Logger.loggers[kind] = this;
}

Logger.colors = {
  info: '\x1b[34m',
  error: '\x1b[31m',
  warning: '\x1b[33m',
  sucsess: '\x1b[32m',
  message: '',
};

Logger.loggers = {};

Logger.prototype.log = function(message) {
  const { color, kind } = this;
  console.log(`${color}${kind.toUpperCase()}: ${message}\x1b[0m`);
};

// Style 1
const info = new Logger('info');
const error = new Logger('error');

// Style 2
const printWarning = msg => new Logger('warning').log(msg);
const printSucsess = msg => new Logger('sucsess').log(msg);
const printMessage = msg => new Logger().log(msg);

// Style 1
info.log('Инфо');
error.log('Ошибка');

// Style 2
printWarning('Предупреждение');
printSucsess('Успешно');
printMessage('Сообщение');
