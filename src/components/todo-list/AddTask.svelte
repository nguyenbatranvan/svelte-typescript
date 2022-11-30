<script lang="ts">
    import {Dialog, DialogOverlay, DialogTitle, Transition, TransitionChild} from "@rgossiaux/svelte-headlessui";
    import {createEventDispatcher} from "svelte";

    const dispatch = createEventDispatcher();
    export let isOpen = false;

    function closeModal() {
        isOpen = false;
        dispatch('onclose',{});
    }
</script>

<Transition appear show={isOpen}>
    <Dialog
            as="div"
            class="fixed inset-0 z-10 overflow-y-auto"
            on:close={closeModal}
    >
        <div class="min-h-screen px-4 text-center">
            <TransitionChild
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
            >
                <DialogOverlay class="fixed inset-0"/>
            </TransitionChild>

            <TransitionChild
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
            >
                <!-- This element is to trick the browser into centering the modal contents. -->
                <span class="inline-block h-screen align-middle" aria-hidden="true">
          &#8203;
        </span>
                <div
                        class="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
                >
                    <DialogTitle
                            as="h3"
                            class="text-lg font-medium leading-6 text-gray-900"
                    >
                        Add new task
                    </DialogTitle>
                    <div class="mt-2">
                        <input name="password" id="password"
                               class="flex-1 w-full p-2 pr-10 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                               placeholder="input text your task" type="text">
                    </div>

                    <div class="mt-4 text-right">
                        <button type="button"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            Save
                        </button>
                        <button on:click={closeModal} type="button"
                                class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                            Cancel
                        </button>
                    </div>
                </div>
            </TransitionChild>
        </div>
    </Dialog>
</Transition>
