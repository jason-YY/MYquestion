require('chromedriver');
var webdriver = require('selenium-webdriver');
var By = webdriver.By;
var driver = new webdriver.Builder().forBrowser('chrome').build();
//shurubendiwangzhi
driver.get('http://192.168.37.130:3000');
driver.sleep(2000)
//dianjidenglu
driver.findElement(By.css('body > div.navbar > div > div > ul > li:nth-child(6) > a')).click();
//shuruzhanghao
driver.findElement(By.css('#name')).sendKeys('jason');
//shurumima
driver.findElement(By.css('#pass')).sendKeys('Yy456123');
//dianjidenglu
driver.findElement(By.css('#signin_form > div.form-actions > input')).click();
//dianjifabuhuati
driver.findElement(By.css('#create_topic_btn > span')).click();
//dianjixuanzebankuai
driver.findElement(By.css('#tab-value')).click();
//xuanze"zhaopin"
driver.findElement(By.css('#tab-value > option:nth-child(4)')).click();
//shurubiaoti
driver.findElement(By.css('#title')).sendKeys('gaoxinzhaopinyiming ceshigongchengshi')
//zhaodaozhengwenshurukuang
driver.findElement(By.css('#create_topic_form > fieldset > div > div > div.CodeMirror.cm-s-paper > div.CodeMirror-scroll')).click();
//shuruzhengwen
let editor = driver.findElement(By.css('#create_topic_form > fieldset > div > div > div.CodeMirror.cm-s-paper > div.CodeMirror-scroll > div:nth-child(2)'));
driver.actions().mouseMove(editor).sendKeys('yaoqiu:liangnianyishangzidonghuaceshijingyan').perform();
//shanchuantupianpujian
// driver.switchTo().alert().accept();
driver.sleep(2000);
driver.findElement(By.css('#create_topic_form > fieldset > div > div > div.editor-toolbar > a.eicon-image')).click();
// driver.findElement(By.css('#rt_rt_1blt7hm3h18p01r8a9ntdjt1e481 > label')).click();
// driver.findElement(By.css('#form > div > div.soutu-state-normal > div.upload-wrap > input')).sendKeys('C:\\Users\\Administrator\\Desktop\\IMG_2157.jpg');