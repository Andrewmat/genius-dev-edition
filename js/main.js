/* ========================================

    Genius Dev Edition
    Developed by Caue Queiroz

    js/ui.js: Control the view
    js/level: Generate and storage levels
    js/keyboard.js: Control keyboard input
    js/sound.js: Controll all game sounds

============================================ */

var Game = {
    allowUser: true,

    nextLevel: function() {
        Game.allowUser = false;
        Keyboard.position = 0;
        Level.current++;
        
        UI.changeText('level '+Level.current);
        UI.changeColor('wait');
        
        UI.type(Level.getLevelKeys(), function() {
            UI.changeColor('wait');
            Game.allowUser = true;            
        });
    },

    init: function() {
        Sound.load();
        Level.generateLevelList();

        document.addEventListener('keydown', Keyboard.press);
        document.addEventListener('keyup', Keyboard.release);
    }
}

Game.init();