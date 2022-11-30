<script lang="ts">
    import {createForm} from "svelte-forms-lib";
    import {useLocation, useNavigate} from "svelte-navigator";
    import * as yup from "yup";
    import {user} from "~/stores";

    const navigate = useNavigate();
    const location = useLocation();
    const {form, errors, handleChange, handleSubmit} = createForm({
        initialValues: {
            password: "",
            email: ""
        },
        validationSchema: yup.object().shape({
            email: yup.string().email().required("Email cannot be blank"),
            password: yup.string().required("Password cannot be blank")
        }),
        onSubmit: values => {
            handleLogin();
        }
    });

    function handleLogin() {
        // user.set({...$form});
        sessionStorage.setItem('user', new Date().getTime().toString());
        const from = ($location.state && $location.state.from) || "/";
        navigate(from, {replace: true});
    }
</script>
<div class="bg-gray-200 w-full min-h-screen flex items-center justify-center">
    <div class="w-full py-8">
        <div class="flex items-center justify-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-blue-600" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path>
            </svg>
            <h1 class="text-3xl font-bold text-blue-600 tracking-wider">Template</h1>
        </div>
        <div class="bg-white w-5/6 md:w-3/4 lg:w-2/3 xl:w-[500px] 2xl:w-[550px] mt-8 mx-auto px-16 py-8 rounded-lg shadow-2xl">

            <h2 class="text-center text-2xl font-bold tracking-wide text-gray-800">Sign In</h2>
            <!--            <p class="text-center text-sm text-gray-600 mt-2">Already have an account? <a href="#"-->
            <!--                                                                                          class="text-blue-600 hover:text-blue-700 hover:underline"-->
            <!--                                                                                          title="Sign In">Sign in-->
            <!--                here</a></p>-->

            <form class="my-8 text-sm">


                <div class="flex flex-col my-4">
                    <label for="email" class="text-gray-700">Username</label>
                    <input type="email" name="email" id="email"
                           bind:value={$form.email}
                           on:keyup={handleChange}
                           class="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                           placeholder="Enter your email">
                    {#if $errors.email}
                        <small class="text-red-500">{$errors.email}</small>
                    {/if}
                </div>

                <div class="flex flex-col my-4">
                    <label for="password" class="text-gray-700">Password</label>
                    <div class="relative w-full  mt-2">
                        <input bind:value={$form.password} name="password" id="password"
                               on:keyup={handleChange}
                               class="flex-1 w-full p-2 pr-10 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                               placeholder="Enter your password" type="password">
                        {#if $errors.password}
                            <small class="text-red-500">{$errors.password}</small>
                        {/if}

                    </div>
                </div>


                <div class="flex items-center">
                    <input type="checkbox" name="remember_me" id="remember_me" class="mr-2 focus:ring-0 rounded">
                    <label for="remember_me" class="text-gray-700">I accept the <a href="#"
                                                                                   class="text-blue-600 hover:text-blue-700 hover:underline">terms</a>
                        and <a href="#" class="text-blue-600 hover:text-blue-700 hover:underline">privacy
                            policy</a></label>
                </div>

                <div class="my-4 flex items-center justify-end space-x-4">
                    <button on:click={handleLogin}
                            class="bg-blue-600 hover:bg-blue-700 rounded-lg px-8 py-2 text-gray-100 hover:shadow-xl transition duration-150 uppercase">
                        Signin
                    </button>
                </div>
            </form>

            <div class="flex items-center justify-between">
                <div class="w-full h-[1px] bg-gray-300"></div>
                <span class="text-sm uppercase mx-6 text-gray-400">Or</span>
                <div class="w-full h-[1px] bg-gray-300"></div>
            </div>

            <div class="text-sm">
                <a href="#"
                   class="flex items-center justify-center space-x-2 text-gray-600 my-2 py-2 bg-gray-100 hover:bg-gray-200 rounded">
                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 326667 333333"
                         shape-rendering="geometricPrecision" text-rendering="geometricPrecision"
                         image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd">
                        <path d="M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z"
                              fill="#4285f4"></path>
                        <path d="M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z"
                              fill="#34a853"></path>
                        <path d="M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z"
                              fill="#fbbc04"></path>
                        <path d="M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z"
                              fill="#ea4335"></path>
                    </svg>
                    <span>Sign up with Google</span>
                </a>
                <a href="#"
                   class="flex items-center justify-center space-x-2 text-gray-600 my-2 py-2 bg-gray-100 hover:bg-gray-200 rounded">
                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                         viewBox="0 0 124.8 123.36">
                        <defs>
                            <style>.cls-1, .cls-2 {
                                fill: none;
                            }

                            .cls-1 {
                                clip-rule: evenodd;
                            }

                            .cls-3 {
                            }

                            .cls-4 {
                            }

                            .cls-5 {
                                fill: #fff;
                            }
                            </style>
                            <clipPath id="clip-path" transform="translate(0.69 0.51)">
                                <path class="cls-1"
                                      d="M27.75,0H95.13a27.83,27.83,0,0,1,27.75,27.75V94.57a27.83,27.83,0,0,1-27.75,27.74H27.75A27.83,27.83,0,0,1,0,94.57V27.75A27.83,27.83,0,0,1,27.75,0Z"></path>
                            </clipPath>
                            <clipPath id="clip-path-2" transform="translate(0.69 0.51)">
                                <rect class="cls-2" width="122.88" height="122.31"></rect>
                            </clipPath>
                        </defs>
                        <g class="cls-3">
                            <g class="cls-4">
                                <image width="260" height="257" transform="matrix(0.48, 0, 0, -0.48, 0, 123.36)"
                                       xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAAEBCAYAAACexdu5AAAACXBIWXMAABcRAAAXEQHKJvM/AAAEFUlEQVR4Xu3dwXEdIRBFUb4kZ+HwHJbDcxrSeAG+hctVJgDO2cyG9aumoYfX8zzP68evAdzr+fl9jDHG22EdcJGPMcZ4vV6ndcAFPubn+f8q4Aq2DEBmhWDLAAxbBmCzAkGFAKgQgM3qIRxWAVdwygBkVQhyAdBUBDZKAyCaikBmIDxfh2XADda0o50DUFNRhQBoKgIbgQBEIABx7AhEhQBEIACZW4a398My4AYqBCACAYhZBiCrh6BQAFQIwGZOO55WAVewVwDin4pAVlNRIACaisDG689ANBWBeLkJyOoheP0Z8Bw8sNFUBKJCAKKbCEQgAHHsCGQ99npaBtxAaQDEsSMQ045ANBWBqBCAKA2AeA4eiAoBiEAAIhCA6CEAUSEAWcNNcgEwywBs3FQEYpYBiAoByHr9WYUAqBCAzXqXwSkD4KEWYOPqMhDHjkBsGYCYZQCyjh1VCEAXk3QVAT0EYCMQgDh2BLIqBLMMQBXC+2EZcAPTjkD0EICsm4qnZcANlAZAjD8D0VQEoqkIxNVlIEoDIJqKQOY9hNMq4AoqBCB6CEDWL9RMOwIqBGDjbUcgq6noYhJglgHYaCoCWRXC52EZcIP1xyRNRaAK4bAKuIKry0D8IAWIl5uAqBCA+IUakFUh6CoCph2BzbqHYMsAuIcAbGwZgPhBChAVApA17XhaBtxAhQBEIAARCEAEAhCzDEBMOwKxZQAiEIAYbgJilgGILQOQOctwWgVcQQ8BiC0DkPUcvFwA+smql5sALzcBG8NNQGwZgKx/KtoyAO4hABulARBNRSCaikDcQwCiqQjElgHIqhDeD8uAG6xfqKkQADcVgY2mIhBNRSCaikBWhfB5WAbcwCwDEMcLQNax42kZcAMVAhCBAMTFJCDr5Sb3EAA3FYHNPGVQIQBDUxHYuLoMRFMRiKYiEBUCEBeTgDhlADLvIZxWAVfwgxQgtgxANBWBzED4clMR7vZtjOEeArBxUxGIHgIQ/0MAYvwZGLUTD6uAi8xY0EQAhqYisHEPAYimIjDGmEWB8Wcgxp+BOHYEoqkIRFMRGH82C7YMQAw3AfkYY4zH/xDgcnOzoEIAYpYBiKYiEIEAxJYBiAoBiGlHILYMQPxTEYiXm4Dx103F8aa3CDhlADa2DMCwZQD+oUIAxt/jz/9dCNzCb9iBaB4AEQhAzDIAUSEAEQhAnDIAUSEAcTEJiFMGIAIByBpuOqwCrqBCACIQgNgyAFEhAHExCYhAADJvKtoyAEOFAGwEAhCBAEQgAHEPAYgKAYhAACIQgAgEIAIBiEAAIhCACAQgAgGIQAAiEIAIBCACAYhAACIQgAgEIAIBiEAAIhCACAQgAgGIQAAiEIAIBCACAYhAACIQgAgEIAIBiEAAIhCA/AafC2PbZ0osjAAAAABJRU5ErkJggg=="></image>
                            </g>
                        </g>
                        <path class="cls-5"
                              d="M85.36,78.92l2.72-17.76H71V49.63c0-4.86,2.38-9.59,10-9.59H88.8V24.92a94.45,94.45,0,0,0-13.75-1.2c-14,0-23.21,8.5-23.21,23.9V61.16H36.24V78.92h15.6v43.57H71V78.92Z"
                              transform="translate(0.69 0.51)"></path>
                    </svg>
                    <span>Sign up with Facebook</span>
                </a>
                <a href="#"
                   class="flex items-center justify-center space-x-2 text-gray-600 my-2 py-2 bg-gray-100 hover:bg-gray-200 rounded">
                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.31">
                        <defs>
                            <style>.cls-1 {
                                fill: #0a66c2;
                            }

                            .cls-1, .cls-2 {
                                fill-rule: evenodd;
                            }

                            .cls-2 {
                                fill: #fff;
                            }
                            </style>
                        </defs>
                        <title>linkedin-app</title>
                        <path class="cls-1"
                              d="M27.75,0H95.13a27.83,27.83,0,0,1,27.75,27.75V94.57a27.83,27.83,0,0,1-27.75,27.74H27.75A27.83,27.83,0,0,1,0,94.57V27.75A27.83,27.83,0,0,1,27.75,0Z"></path>
                        <path class="cls-2"
                              d="M49.19,47.41H64.72v8h.22c2.17-3.88,7.45-8,15.34-8,16.39,0,19.42,10.2,19.42,23.47V98.94H83.51V74c0-5.71-.12-13.06-8.42-13.06s-9.72,6.21-9.72,12.65v25.4H49.19V47.41ZM40,31.79a8.42,8.42,0,1,1-8.42-8.42A8.43,8.43,0,0,1,40,31.79ZM23.18,47.41H40V98.94H23.18V47.41Z"></path>
                    </svg>
                    <span>Sign up with LinkedIn</span>
                </a>
            </div>
        </div>
    </div>
</div>
