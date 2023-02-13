<template>
    <div class="container">
        <p>Are you sure you want to delete this ?</p>
        <div class="buttons">
            <div class="btn green">Accept</div>
            <div class="btn red">Decline</div>
        </div>
    </div>
</template>

<style scoped>
.container {
    background: var(--clr-white);
    border-radius: .5rem;
    position: fixed;


}

.buttons {
    margin-top: 2rem;
    display: flex;
    gap: 1rem;
}
</style>