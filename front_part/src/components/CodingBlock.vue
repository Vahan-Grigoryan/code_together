<template>
    <Browser
    v-if="browser_visible"
    />
    <div class="code_env_block">
        <div class="raw_info">
            <h2>Vahan Grigoryan</h2>
            <span ref="navigation_hint">
                click alt+s for switch between chrome and code envirement
            </span>
        </div>
        <div class="hierarchy_or_operations_and_writing_env">
            <div class="hierarchy_or_operations">
                <!--
                <CDButton />
                <CDButton />
                <CDButton />
                <CDButton />
                <CDButton />
                -->
                <DirTree
                :catalog_info="test_catalog"
                @fileSelected="absolute_path => console.log(absolute_path)"
                />
            </div>
            <div class="writing_env">
                <CodeEditor />
                <Terminal />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'


const navigation_hint = ref(null)
const browser_visible = ref(false)
const test_catalog = {
    dirname: 'C:/Users/user',
    entities: [
        'F_1',
        'F_2',
        {
            dirname:'D_1',
            entities:[
                'D_1_NF_1',
                'D_1_NF_2',
                {
                    dirname:'D_1_1',
                    entities:['D_1_1_NF_1_1', 'D_1_1_NF_2_2']
                },
            ],
        },
        {
            dirname:'D_2',
            entities:[
                'D_2_NF_1',
                'D_2_NF_2',
                {
                    dirname:'D_2_1',
                    entities:['D_2_1_NF_1', 'D_2_1_NF_2']
                },
            ],
        },
        'F_3',
    ]
}

addEventListener("keydown", e => {
    if (e.altKey && e?.key == 's') {
        browser_visible.value = !browser_visible.value
        navigation_hint.value.style.display = "none"
    }
})
</script>

<style scope>
.code_env_block {
    padding: 15px;
    box-shadow:0px 0px 0px 2px black inset;
    width: calc(100% - 30px);
    height: calc(100vh - 30px);
    background:#141414;
    color:white;
}
.code_env_block > .raw_info > h2 {
    margin: 0px;
}
.hierarchy_or_operations_and_writing_env {
    display: flex;
    justify-content: space-between;
    box-shadow:0px 0px 0px 2px red inset;
    height: calc(100% - 47px);
}
.hierarchy_or_operations {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap:20px;
    width: 20%;
    height: 100%;
    background: black;
}
.writing_env {
    width:78%;
    height: 100%;
}
.raw_info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
}
.raw_info span {
    animation: blink_sequence 5s linear infinite 
}
@keyframes blink_sequence {
    0% {
        color: #282a36;
    }
    50% {
        color: var(--violet1);
    }
    100% {
        color: #282a36;
    }
}
</style>
