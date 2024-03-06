<template>
    <div class="catalog">
        <p @click="catalog_hidden = !catalog_hidden"> {{ props.spaces + props.catalog_info.dirname + '/'}} </p>
        <DirTree
        v-for="dir in dirs"
        @fileSelected="filename => buildAbsolutePath(filename)"
        :class="{hidden: catalog_hidden}"
        :catalog_info="dir"
        :spaces="props.spaces + '&nbsp;&nbsp;&nbsp;&nbsp;'"
        />
        <p
        v-for="filename in files"
        @click="() => buildAbsolutePath(filename)"
        :class="{
            filename:true,
            hidden:catalog_hidden
        }"
        >
            {{ props.spaces + '&nbsp;&nbsp;&nbsp;&nbsp;' + filename }}
        </p>
    </div>

</template>

<script setup lang="ts">
/*
Component receive root directory with files and folders in CatalogInfo format
and recursively show it with all files and nested folders
*/
import { ref, onBeforeMount } from 'vue'


interface CatalogInfo {
    entities: Array< string | CatalogInfo >,
    dirname: string,
}

const emit = defineEmits<{
    (e: 'fileSelected', filename: string): void
}>()
const props = withDefaults(
    defineProps<{
        catalog_info: CatalogInfo,
        spaces?: string,
    }>(),
    {
        spaces: '',
    }
)

const catalog_hidden = ref(true)
let files = []
let dirs = []


onBeforeMount(() => {
    files = props.catalog_info.entities.filter(el => typeof el === 'string')
    dirs = props.catalog_info.entities.filter(el => typeof el !== 'string')
})


function buildAbsolutePath(filename){
    emit("fileSelected", props.catalog_info.dirname + '/' + filename)
}

</script>

<style scope>
.hidden {
    display: none;
}
.catalog > p {
    color: white;
    cursor: pointer;
}
.catalog > p:first-child {
    color: var(--medium2);
    font-weight: 600;
}
</style>
