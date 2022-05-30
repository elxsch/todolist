<template>
<header class="header">
	<div class="container">
		<div class="row-wrap">
			<div class="logo-wrap">
				<img src="img/liste.png" class="logo-todo"/><p class="titre-logo">TO DO</p>

			</div>
			<div class="nav-wrap">
                <p class="titre-logo">Mon compte   Déconnexion</p>
			</div>
			<div class="hamburger">
				<span class="line"></span>
				<span class="line"></span>
				<span class="line"></span>
			</div>
		</div>
	</div>
</header>
<div class="overlay"></div><br>

<div class="flex flex-row container-compte">
        <div id="liste"><br>
            <p class="titre-liste">Mes listes</p>
            <div class="nom-liste">
                Recette 1
            </div>
            <div class="nom-liste">
                Recette 2
            </div>
			<div class="nom-liste">
            <ToDo 
                v-for="list in todo" 
                :key="list.id" 
                :list="list"/>
            </div>
        </div>
        <div id="element">
            <div class="px-32 pt-24">
                <div>
                    <div>Nom Liste</div>
                </div>
                <div class="pt-10">
                    <div class="flex flex-row pb-2">
                        <p>CONTENU</p>
                    </div>
                    <!-- Todo Item -->
                </div>
                
            </div>
        </div>
</div>
</template>

<script>
import api from '@/plugins/axios'
import ToDo from '@/pages/PageListe.vue'

export default {
    components: {
        ToDo
    },
    data() {
        return {
            todo: []
        }
    },
    mounted () {
        api.get('todo-lists?populate=*').then((response) => {
            this.todo = response.data.data
            console.log(this.todo)
        });
    },
}
</script>

<style scoped>
.titre-logo {
	font-weight:bold;
    color:white;
}
.titre-liste {
	font-weight:bold;
    color:white;
}
#liste {
    width: 30%;
	display:block;
    float: left;
    height: auto;
    background-color: #303030;
    box-shadow: black;
	border-right-color: solid 1px #545454;
}
#element {
    width: 70%;
    float: left;
    height: auto;
    color: white;
}

.container-compte {
    background-color:#303030;
    color:white;
    padding: 40px;
    text-align: center;
    display: block;
    margin-left: auto;
    margin-right: auto;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    width:100%;
    height: 600px;
}

.nom-liste{
    padding:10px;
    background-color:#545454;
    color:white;
    margin:5px;
    border-radius: 10px;
}

.sidebar-open {
	overflow: hidden;
}
.overlay {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.3);
	opacity: 0;
	visibility: hidden;
	transition: all 0.5s;
}
.sidebar-open .overlay {
	opacity: 1;
	visibility: visible;
}
.header {
	padding: 30px 0;
	background-color: #545454;
	box-shadow: 3px 3px 3px #ccc;
	z-index: 99;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
    color: white;
	justify-content:space-between;
}
.logo {
	color: #ffffff;
	font-size: 36px;
	font-weight: 700;
}
.container {
	padding: 0 15px;
}
.row-wrap {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
}
.nav-list {
	display: flex;
	align-items: center;
}
.nav-list li {
	padding: 0 10px;
}
.nav-list li a {
	color: #ffffff;
	font-size: 18px;
	text-decoration: none;
	padding: 10px 0;
	position: relative;
	display: block;
}
.nav-list li a::after {
	content: "";
	background-color: #ffffff;
	width: 0;
	height: 2px;
	position: absolute;
	left: 0;
	bottom: 0;
	transition: all 0.3s linear;
}
.nav-list li a:hover::after {
	width: 100%;
}
.nav-list li.active a::after {
	width: 100%;
}
.nav-list li.with-submenu {
	position: relative;
	cursor: pointer;
	display: flex;
	align-items: center;
}
.nav-list li.with-submenu > a {
	margin-right: 10px;
}
.nav-list li.with-submenu::after {
	content: "";
	border-bottom: 2px solid #fff;
	border-right: 2px solid #fff;
	position: absolute;
	width: 5px;
	height: 5px;
	transform: rotate(45deg);
	right: 0;
	margin-bottom: 5px;
	transition: all 0.3s;
}
.nav-list li.with-submenu:hover::after {
	transform: rotate(225deg);
	margin-top: 10px;
}
.nav-list li.with-submenu .submenu {
	position: absolute;
	left: 50%;
	top: 100%;
	background: #ffffff;
	border-radius: 10px;
	transform: translateX(-50%);
	box-shadow: 2px 2px 1px 2px #ccc;
	overflow: hidden;
	opacity: 0;
	visibility: hidden;
	transition: all 0.5s ease-in-out;
}
.nav-list li.with-submenu:hover .submenu {
	opacity: 1;
	visibility: visible;
}
.nav-list li.with-submenu .submenu li {
	padding: 0;
}
.nav-list li.with-submenu .submenu a {
	color: #000000;
	display: block;
	padding: 8px 15px;
	transition: all 0.3s;
}
.nav-list li.with-submenu .submenu a:hover {
	background-color: rgba(49, 20, 50, 0.3);
}
.nav-list li.with-submenu .submenu a::after {
	display: none;
}
.hamburger {
	display: none;
	z-index: 99;
}
.hamburger .line {
	width: 25px;
	height: 1.5px;
	background-color: #ffffff;
	display: block;
	margin: 5px 0;
	-webkit-transition: all 0.3s ease-in-out;
	-o-transition: all 0.3s ease-in-out;
	transition: all 0.3s ease-in-out;
}
.hamburger .line:nth-child(2) {
	width: 15px;
}
.hamburger:hover {
	cursor: pointer;
}
.hamburger.is-active .line {
	background-color: #311432;
}
.hamburger.is-active .line:nth-child(2) {
	opacity: 0;
}
.hamburger.is-active .line:nth-child(1) {
	-webkit-transform: translateY(6.5px) rotate(45deg);
	-ms-transform: translateY(6.5px) rotate(45deg);
	-o-transform: translateY(6.5px) rotate(45deg);
	transform: translateY(6.5px) rotate(45deg);
}
.hamburger.is-active .line:nth-child(3) {
	-webkit-transform: translateY(-6.5px) rotate(-45deg);
	-ms-transform: translateY(-6.5px) rotate(-45deg);
	-o-transform: translateY(-6.5px) rotate(-45deg);
	transform: translateY(-6.5px) rotate(-45deg);
}
@media (max-width: 767px) {
	.header {
		padding: 10px 0;
	}
	.hamburger {
		display: block;
	}
	.nav-wrap {
		position: fixed;
		top: 0;
		right: 0;
		transform: translateX(100%);
		background-color: #ffffff;
		transition: all 0.5s linear;
		max-width: 300px;
		width: 100%;
		height: 100%;
		box-shadow: 2px -5px 5px 3px #ccc;
		opacity: 0;
		visibility: hidden;
		z-index: 9;
	}
	.nav-wrap.is-open {
		transform: translateX(0);
		opacity: 1;
		visibility: visible;
	}
	.nav-list {
		flex-direction: column;
		align-items: unset;
		opacity: 0;
		visibility: hidden;
		transition-delay: 0.5s;
		transition-duration: 1s;
		transition-property: all;
		padding: 10px;
	}
	.nav-wrap.is-open .nav-list {
		opacity: 1;
		visibility: visible;
	}
	.nav-list li {
		padding: 7px 10px;
	}
	.nav-list li a {
		color: #311432;
		text-align: left;
		display: inline-block;
		padding: 2px 0;
	}
	.nav-list li a::after {
		background-color: #311432;
	}
	.nav-list li.with-submenu {
		display: block;
	}
	.nav-list li.with-submenu::after {
		border-color: #311432;
		right: 10px;
		top: 12px;
	}
	.nav-list li.with-submenu:hover::after {
		transform: rotate(45deg);
		margin-top: 0;
	}
	.nav-list li.with-submenu.is-open::after {
		transform: rotate(225deg);
		margin-top: 5px;
	}
	.nav-list li.with-submenu .submenu {
		position: static;
		transform: translateX(0);
		opacity: 1;
		visibility: visible;
		box-shadow: none;
		border-radius: 0;
		border-top: 1px solid #ccc;
		display: none;
		transition: auto;
		margin: 10px 0;
	}
	.nav-list li.with-submenu .submenu li {
		padding: 7px 10px;
	}
	.nav-list li.with-submenu .submenu li:hover a {
		background-color: transparent;
	}
	.nav-list li.with-submenu .submenu li a {
		display: inline-block;
		padding: 2px 0;
	}
	.nav-list li.with-submenu .submenu li a::after {
		display: block;
	}
}

</style>
