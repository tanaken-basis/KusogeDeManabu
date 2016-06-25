///////////////////////////////////////////////////////////////////////////////
// menu

func.attackAtBattle = function() {
    jsonBattle.bottomLeft.update.flag = false;
    jsonBattle.bottomLeft.choice.highlight.stop = true;
    updateChoiceAtMisc(jsonBattle.bottomLeft.choice, game.camera);
    jsonMath.update.flag = true;
};

func.itemsAtBattle = function() {
    createBalloonAtMisc(jsonBattle.subMenu.balloon);
    createSubMenuItemsChoiceAtBattle();
}

func.escapeAtBattle = function(args) {
    escapeAtBattle(args);
};

///////////////////////////////////////////////////////////////////////////////
// items

func.updateSubMenuItemsAtBattle = function() {
  if(Object.keys(jsonData.state.items).length > 0){
    updateChoiceAtMisc(jsonBattle.subMenu.choice, game.camera);
  }
};

func.useItemsAtBattle = function(args) {
  func[args]();
  destroyControllersAtMisc(jsonBattle.subMenu);
  destroyChoiceAtMisc(jsonBattle.subMenu.choice);
  jsonBattle.subMenu.choice.highlight.stop = false;
  createSubMenuItemsChoiceAtBattle();
  createBottomRightStatusAtBattle();
};
