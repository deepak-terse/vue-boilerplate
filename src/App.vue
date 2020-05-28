<!--- =============================== Template =============================== -->
<template>
	<div class="app-container">
        <router-view/>
        <div class="view-page-footer">
            <Footer></Footer>
        </div>
	</div>
</template>
<!--- ============================= Template Ends ============================ -->

<!--- ================================ Script ================================ -->
<script>
import Footer from "@/components/Footer.vue";

export default {
    name: "App",
    data: function(){
        return {
            title: this.$route.name,
            isShowHeader: this.$route.meta.requiresAuth
        };
    },
    components: {
        Footer
    },
    methods: {
    }
};
</script>
<!--- ============================== Script Ends ============================= -->

<!--- ================================= Style ================================ -->
<style lang="scss">
@import '/styles/styles.scss';

.app-container:first-child{
    min-height: 100%;
    margin-bottom: -50px;
}
.view-page-footer{
    height:50px;
}
</style>
<!--- ============================== Style Ends ============================== -->