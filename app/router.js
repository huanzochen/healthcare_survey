'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/question/common', controller.api.getcommonquestion);
  router.get('/question/basic', controller.api.getbasicquestion);
};
