import Keycloak, { KeycloakProfile } from "keycloak-js";
import { computed, ref } from "vue";
export default function useKeycloak(keycloakInstance: Keycloak) {
    const keycloak = ref(keycloakInstance);
    const loggedIn = ref(false);
    const initProfile = ref<KeycloakProfile | null>(null);
    const profile = computed(() =>
        initProfile.value
            ? {
                  ...initProfile.value,
                  fullName: `${initProfile.value.firstName} ${initProfile.value.lastName}`,
              }
            : null
    );
    async function login() {
        try {
            const isLoggedIn = await keycloak.value.init({
                onLoad: "login-required",
                silentCheckSsoFallback: false,
            });
            loggedIn.value = isLoggedIn;
            if (isLoggedIn) {
                getProfile();
            }
        } catch (e) {
            console.log("error", e);
        }
    }
    async function getProfile() {
        try {
            const p = await keycloak.value.loadUserProfile();
            initProfile.value = p;
        } catch (error) {
            console.error("Failed to load user profile:", error);
        }
    }
    return { loggedIn, profile, login, getProfile };
}
