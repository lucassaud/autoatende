
/** 
* This file has been protected.
*/
   
function _0x106e(){const _0x4ccd69=['DATE','host','163820iaWYAq','1256171KRaxKF','Erro\x20ao\x20verificar\x20se\x20o\x20número\x20está\x20bloqueado:','isBlocked','then','1095435SqSGTT','CURRENT_TIMESTAMP','isBlocked\x20>>\x205516997980088\x20Número\x20está\x20na\x20lista\x20de\x20bloqueados.','log','sync','remove\x20>>\x20Número\x20removido\x20da\x20lista\x20de\x20bloqueio.','874812QQTiqu','4250064GItrFy','delete','8WHqXSI','3870650UQePrM','destroy','Erro\x20ao\x20inserir\x20número\x20bloqueado:','2fsgZEX','Blocked','insert\x20>>\x20Número\x20adicionado\x20a\x20lista\x20de\x20bloqueio.','findOne','user','Erro\x20ao\x20remover\x20número\x20bloqueado:','-03:00','datasource','sequelize','define','insert','literal','Blocks','220GKnUQS','5516993636362','90CJQrju','1588395WLqsLh','isBlocked\x20>>\x205516997980088\x20Número\x20não\x20está\x20na\x20lista\x20de\x20bloqueados.','version','data','6yOpZoS','pwd','../conf/config','error','remove\x20>>\x20Ocorreu\x20um\x20erro\x20ao\x20remover\x20da\x20lista\x20de\x20bloqueio'];_0x106e=function(){return _0x4ccd69;};return _0x106e();}const _0x24314d=_0x4279;(function(_0x487fde,_0x545e94){const _0x23c662=_0x4279,_0x1f7e06=_0x487fde();while(!![]){try{const _0x396eba=-parseInt(_0x23c662(0x1bc))/0x1+-parseInt(_0x23c662(0x1c9))/0x2*(-parseInt(_0x23c662(0x1ac))/0x3)+-parseInt(_0x23c662(0x1c3))/0x4+-parseInt(_0x23c662(0x1c6))/0x5*(-parseInt(_0x23c662(0x1b0))/0x6)+parseInt(_0x23c662(0x1b8))/0x7*(-parseInt(_0x23c662(0x1c5))/0x8)+parseInt(_0x23c662(0x1ab))/0x9*(parseInt(_0x23c662(0x1b7))/0xa)+parseInt(_0x23c662(0x1a9))/0xb*(parseInt(_0x23c662(0x1c2))/0xc);if(_0x396eba===_0x545e94)break;else _0x1f7e06['push'](_0x1f7e06['shift']());}catch(_0x3163e5){_0x1f7e06['push'](_0x1f7e06['shift']());}}}(_0x106e,0x8f8ff));function _0x4279(_0x4b2947,_0x42f804){const _0x106e2b=_0x106e();return _0x4279=function(_0x4279ea,_0x1d254f){_0x4279ea=_0x4279ea-0x1a0;let _0x5c1dc4=_0x106e2b[_0x4279ea];return _0x5c1dc4;},_0x4279(_0x4b2947,_0x42f804);}const config=require(_0x24314d(0x1b2)),{Sequelize,DataTypes}=require(_0x24314d(0x1a4));class Block{constructor(){const _0x424e2e=_0x24314d;this[_0x424e2e(0x1ae)]='1.2.1',this[_0x424e2e(0x1a4)]=new Sequelize(config[_0x424e2e(0x1a3)]['data']['db'],config[_0x424e2e(0x1a3)][_0x424e2e(0x1af)][_0x424e2e(0x1a0)],config[_0x424e2e(0x1a3)][_0x424e2e(0x1af)][_0x424e2e(0x1b1)],{'host':config[_0x424e2e(0x1a3)][_0x424e2e(0x1af)][_0x424e2e(0x1b6)],'dialect':config['datasource'][_0x424e2e(0x1af)]['dialect'],'logging':config[_0x424e2e(0x1a3)]['data'][_0x424e2e(0x1bf)],'timezone':_0x424e2e(0x1a2)}),this[_0x424e2e(0x1ca)]=this[_0x424e2e(0x1a4)][_0x424e2e(0x1a5)](_0x424e2e(0x1a8),{'id':{'type':DataTypes['INTEGER'],'autoIncrement':!![],'primaryKey':!![]},'phoneNumber':{'type':DataTypes['STRING'],'allowNull':![],'unique':!![]},'createdAt':{'type':DataTypes[_0x424e2e(0x1b5)],'allowNull':!![],'defaultValue':this[_0x424e2e(0x1a4)][_0x424e2e(0x1a7)]('CURRENT_TIMESTAMP')},'updatedAt':{'type':DataTypes[_0x424e2e(0x1b5)],'allowNull':!![],'defaultValue':this['sequelize'][_0x424e2e(0x1a7)](_0x424e2e(0x1bd))}}),this['sequelize'][_0x424e2e(0x1c0)]({'alter':!![]});}async[_0x24314d(0x1a6)](_0x4387f4){const _0x554ba0=_0x24314d;try{const _0x3fcc4a=await this[_0x554ba0(0x1ca)][_0x554ba0(0x1cc)]({'where':{'phoneNumber':_0x4387f4}});return!_0x3fcc4a?(await this[_0x554ba0(0x1ca)]['create']({'phoneNumber':_0x4387f4}),!![]):![];}catch(_0x103d0a){return console[_0x554ba0(0x1b3)](_0x554ba0(0x1c8),_0x103d0a),![];}}async[_0x24314d(0x1c4)](_0x918707){const _0x15b295=_0x24314d;try{const _0x6953ad=await this[_0x15b295(0x1ca)][_0x15b295(0x1cc)]({'where':{'phoneNumber':_0x918707}});return _0x6953ad?(await this[_0x15b295(0x1ca)][_0x15b295(0x1c7)]({'where':{'phoneNumber':_0x918707}}),!![]):![];}catch(_0xfae372){return console[_0x15b295(0x1b3)](_0x15b295(0x1a1),_0xfae372),![];}}async[_0x24314d(0x1ba)](_0x169b70){const _0x3c79db=_0x24314d;try{const _0x48ceba=await this[_0x3c79db(0x1ca)][_0x3c79db(0x1cc)]({'where':{'phoneNumber':_0x169b70}});return _0x48ceba?!![]:![];}catch(_0x19df97){return console['error'](_0x3c79db(0x1b9),_0x19df97),![];}}}module['exports']=Block;async function main(){const _0x5ce925=_0x24314d,_0x90488b=new Block();await _0x90488b[_0x5ce925(0x1ba)]('5516997980088')[_0x5ce925(0x1bb)](_0x528f57=>{const _0x30a5fd=_0x5ce925;_0x528f57?console[_0x30a5fd(0x1bf)](_0x30a5fd(0x1be)):console['log'](_0x30a5fd(0x1ad));}),await _0x90488b[_0x5ce925(0x1a6)](_0x5ce925(0x1aa))[_0x5ce925(0x1bb)](_0x41862e=>{const _0x5ebfa3=_0x5ce925;_0x41862e?console[_0x5ebfa3(0x1bf)](_0x5ebfa3(0x1cb)):console[_0x5ebfa3(0x1bf)]('insert\x20>>\x20O\x20número\x20já\x20existe\x20na\x20lista\x20de\x20bloqueio');}),await _0x90488b[_0x5ce925(0x1c4)]('5516993636362')[_0x5ce925(0x1bb)](_0xce03ed=>{const _0xbbb4bb=_0x5ce925;_0xce03ed?console[_0xbbb4bb(0x1bf)](_0xbbb4bb(0x1c1)):console[_0xbbb4bb(0x1bf)](_0xbbb4bb(0x1b4));});}main();
   