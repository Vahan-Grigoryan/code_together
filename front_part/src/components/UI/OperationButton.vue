<template>
    <button class="operation_button">
        <slot></slot>
    </button>
</template>

<script setup>

</script>

<style scope>
.operation_button {
    background:var(--medium2);
    font-size: 16px;
    color:white;
    border:none;
    padding: 15px;
    cursor: pointer;
    clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
    transition: .5s;
}
.operation_button:hover {
    background:var(--fromblack2)
}
</style>
