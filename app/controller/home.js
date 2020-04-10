'use strict';

const Controller = require('egg').Controller;
require('dotenv').config()



class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    console.log('version')
    console.log(process.env.VERSION)
    await ctx.render('health/survey.tpl');
  }
}

module.exports = HomeController;
