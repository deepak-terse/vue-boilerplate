<template>
    <div class="footer">
        <div class="view-card-additional-options-div">
            <span class="copyrightLabel">{{copyrightLabel}}</span>
        </div>
        <div class="view-card-additional-options-div">
            <span class="homeLabel">{{Home}}</span>
            <span class="homeLabel">|</span>
            <span class="homeLabel">{{Disclaimer}}</span>
            <span class="homeLabel">|</span>
            <span class="homeLabel">{{Contact}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer",
    data: function() {
        return {
            "copyrightLabel": "© Copyright 2020 Vue Boilerplate",
            "Home": "Home",
            "Disclaimer": "Disclaimer",
            "Contact": "Contact"
        }
    },
    props: {

    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .footer{
        background: #0f0f0f;
        color: #525252;
        height: 75px;
        margin-bottom:-75px;

        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .view-card-additional-options-div{
        display:flex;
        flex-direction: row;
        justify-content: center;
    }

    .homeLabel{
        padding:0px 5px;
    }
</style>