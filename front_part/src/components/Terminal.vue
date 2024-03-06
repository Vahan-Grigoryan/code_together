<template>
    <div class="main_terminal"></div>
</template>

<script setup>
import { onMounted } from 'vue'
import { Terminal } from '@xterm/xterm'
import '@xterm/xterm/css/xterm.css'


onMounted(()=>{
    const terminal = new Terminal({fontSize:18, rows: 10, cols:109})
    terminal.open(document.querySelector(".main_terminal"))
    terminal.write('Hello from xterm.js $ ')
    terminal.onKey(e => {
        console.log(e, "PRINT KEY")
        if(e.domEvent.code == "Backspace"){
            terminal.write("\b \b");
        }else if(e.domEvent.code == "Enter"){
            terminal.writeln("");
        }else{
            terminal.write(e.key)
        }
        // console.log(String.fromCharCode.apply(null, terminal.buffer.active.getLine(terminal.buffer.active.cursorY)._line._data))
    });
    terminal.onData(e => {
        console.log(e, "PRINT DATA")
    });
})
</script>

<style scope>
.terminal, .xterm-screen {
    background: black;
}
</style>
