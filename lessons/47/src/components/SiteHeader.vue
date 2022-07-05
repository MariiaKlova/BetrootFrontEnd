<template>
    <header id="header" :class="{ 'fixed': isFixed }">
        <div class="header-content clearfix">
            <a class="logo" href="#"><img src="../assets/images/logo.png" alt="logo"></a>
            <nav class="navigation" role="navigation">
                <ul class="primary-nav">
                    <li>
                        <router-link to="/">Home</router-link>
                    </li>
                    <li>
                        <router-link to="/features">Features</router-link>
                    </li>
                    <li>
                        <router-link to="/works">Works</router-link>
                    </li>
                    <!-- <li>
                        <router-link to="/teams">Our Team</router-link>
                    </li>
                    <li>
                        <router-link to="/testimonials">Testimonials</router-link>
                    </li>
                    <li>
                        <router-link to="/download">Download</router-link>
                    </li> -->

                </ul>
            </nav>
            <a href="#" class="nav-toggle" :class="{ 'close-nav': isOpenMobileMenu }"
                @click="toggleMobileMenu">Menu<span></span></a>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            isFixed: false,
            isOpenMobileMenu: false
        }
    },
    created() {
        window.addEventListener('scroll', this.toggleFixedScroll)
    },
    methods: {
        toggleFixedScroll() {
            this.isFixed = window.scrollY > 50
        },
        toggleMobileMenu() {
            this.isOpenMobileMenu = !this.isOpenMobileMenu
        }
    }
}
</script>


