<template>
    <aside :class="`${is_expanded && 'is-expanded'}`">
        <div class="flex flex-col items-center text-center">
            <img src="../assets/profile.jpg" alt="logo" class="rounded-full mb-5">
            <h3>LENG MENGE</h3>
        </div>

        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="ToggleMenu">
                <span class="material-icons">keyboard_double_arrow_right</span>
            </button>
        </div>

        <div class="menu">
            <router-link class="button" to="/">
                <span class="material-icons">person</span>
                <span class="text">Profile</span>
            </router-link>
            <router-link class="button" to="/technology">
                <span class="material-icons">polyline</span>
                <span class="text">Technology</span>
            </router-link>
            <router-link class="button" to="/achivement">
                <span class="material-icons">verified</span>
                <span class="text">Achivement</span>
            </router-link>
            <router-link class="button" to="/education">
                <span class="material-icons">school</span>
                <span class="text">Education</span>
            </router-link>
            <router-link class="button" to="/contact">
                <span class="material-icons">email</span>
                <span class="text">Contact</span>
            </router-link>
        </div>
    </aside>
</template>

<script setup>
import { ref } from 'vue';

const is_expanded = ref(false)

const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value
}
</script>

<style lang="scss" scoped>
aside {
    display: flex;
    flex-direction: column;
    width: calc(2rem + 32px);
    min-height: 100vh;
    overflow: hidden;
    padding: 1rem;

    background-color: var(--dark);
    color: var(--light);

    transition: 0.2s ease-out;

    .menu-toggle-wrap {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;

        position: relative;
        top: 0;
        transition: 0.2s ease-out;

        .menu-toggle {
            transition: 0.2s ease-out;

            .material-icons {
                font-size: 2rem;
                color: var(--light);
                transition: 0.2s ease-out;
            }

            &:hover {
                .material-icons {
                    color: var(--primary);
                    transform: translateX(0.5rem);
                }
            }
        }
	}

    h3 {
		color: var(--grey);
		font-size: 1.5rem;
		margin-bottom: 0.5rem;
		text-transform: uppercase;
        color: var(--primary);
	}

    h3, .button .text {
		opacity: 0;
		transition: 0.3s ease-in-out;
	}

    .menu {
        margin: 0 -1rem;

        .button {
            display: flex;
            align-items: center;
            text-decoration: none;

            padding: 0.5rem 1rem;
            transition: 0.2s ease-out;

            .material-icons {
                font-size: 2rem;
                color: var(--light);
                transition: 0.2s ease-out;
            }

            .text {
				color: var(--light);
				transition: 0.2s ease-in-out;
			}

            &:hover, .router-link-exact-active {
                background-color: var(--dark-alt);

                .material-icons, .text {
                    color: var(--primary);
                }
            }

            &.router-link-exact-active {
				background-color: var(--dark-alt);
				border-right: 5px solid var(--primary);

				.material-icons, .text {
					color: var(--primary);
				}
			}
        }
    }

    &.is-expanded {
        width: var(--sidebar-width);

        .menu-toggle-wrap {
            top: -3rem;
            .menu-toggle {
                transform: rotate(180deg);
            }
        }

        h3, .button .text {
            opacity: 1;
        }

        .button {
            .material-icons {
                margin-right: 1rem;
            }
        }
    }

    @media (max-width: 768px) {
        position: fixed;
        z-index: 99;
    }
}
</style>