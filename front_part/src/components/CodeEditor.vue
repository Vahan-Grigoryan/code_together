<template>
    <VAceEditor
    v-model:value="content"
    @init="editorInit"
    :lang="editor_lang"
    theme="dracula"
    style="height: 70%"
    />
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { VAceEditor } from 'vue3-ace-editor';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-dracula';


const content = ref("#JS\nlet variable = 9")
const editor = reactive({})
const editor_lang = ref("javascript")


onMounted(()=>{
    document.querySelector('.ace_editor').style.fontSize='18px';
    editor.session.on("change", delta => {
        console.log(delta)
    })
})


function editorInit(editorInstance){
    Object.assign(editor, editorInstance)
}
</script>

<style>
</style>
