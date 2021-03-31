
# This workflow will do a clean install of node dependencies, build the source code and run tests across different versions of node
# For more information see: https://help.github.com/actions/language-and-framework-guides/using-nodejs-with-github-actions

name: 全民开红包

on:
  workflow_dispatch:
  schedule:
    - cron: '20 1,9,18 * * *'
  # watch:
  #   types: started
  repository_dispatch:
    types: live
jobs:
  build:

    runs-on: ubuntu-latest
    if: github.event.repository.owner.id == github.event.sender.id
    steps:
      - uses: actions/checkout@v1
      - name: Use Node.js 10.x
        uses: actions/setup-node@v1
        with:
          node-version: 10.x
      - name: npm install
        run: |
          npm install
      - name: '运行 【全民开红包'】'
        run: |
          node jd_redPacketnew.js
          node jd_jxFactoryCreateTuan.js
          node jd_BarGain.js
        env:
          JD_COOKIE: ${{ secrets.JD_COOKIE }}
          JD_DEBUG: ${{ secrets.JD_DEBUG }}
          JD_BEAN_STOP: ${{secrets.JD_BEAN_STOP}} #自定义延迟签到,单位毫秒. 默认分批并发无延迟. 延迟作用于每个签到接口, 如填入延迟则切换顺序签到(耗时较长)
          JD_BEAN_SIGN_STOP_NOTIFY: ${{secrets.JD_BEAN_SIGN_STOP_NOTIFY}}
          JD_BEAN_SIGN_NOTIFY_SIMPLE: ${{secrets.JD_BEAN_SIGN_NOTIFY_SIMPLE}}
          PUSH_KEY: ${{ secrets.PUSH_KEY }}
          BARK_PUSH: ${{ secrets.BARK_PUSH }}
          TG_BOT_TOKEN: ${{ secrets.TG_BOT_TOKEN }}
          TG_USER_ID: ${{ secrets.TG_USER_ID }}
          BARK_SOUND: ${{ secrets.BARK_SOUND }}
          DD_BOT_TOKEN: ${{ secrets.DD_BOT_TOKEN }}
          DD_BOT_SECRET: ${{ secrets.DD_BOT_SECRET }}
          IGOT_PUSH_KEY: ${{ secrets.IGOT_PUSH_KEY }}
