<!--- =============================== Template =============================== -->
<template>
    <div class="view-container">
		<h1>Page Not Found</h1>
        <p>The page you are trying to get to never existed in this reality, or has migrated to a parallel universe.</p>  
		<p>Try going back to home page and repeating your action. Or, contact helpdesk for support.</p>  
    </div>
</template>
<!--- ============================= Template Ends ============================ -->

<!--- ================================ Script ================================ -->
<script>
export default {
  name: "PageNotFound"
};
</script>
<!--- ============================== Script Ends ============================= -->

<!--- ================================= Style ================================ -->
<style lang="scss" scoped>
@import '../styles/styles.scss';

.view-card-title-div{
	display:flex;
	flex-direction: row;
    justify-content: center;
}

.view-container{
    min-height: 100%;
    margin-bottom: -50px;
}
</style>
<!--- ============================== Style Ends ============================== -->