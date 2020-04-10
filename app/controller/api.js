'use strict';

const Controller = require('egg').Controller;
require('dotenv').config()

const q = require("../utils/config/question");



class ApiController extends Controller {
  async getquestion() {
    const { ctx } = this;
    ctx.status = 200
    ctx.body = q.question.common
  }
}

module.exports = ApiController;
