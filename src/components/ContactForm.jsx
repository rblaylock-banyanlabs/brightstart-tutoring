import React from 'react'

const ContactForm = () => {
  return (
    <>
    <section class="bg-slate-800 mt-24 border-2 border-[#D6A60D] rounded-lg">
  <div class="py-8 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-[#F3CB15]">Send a message</h2>
      <p class="mb-8 lg:mb-16 font-light text-[#C8C9C2] sm:text-xl">Send a message for questions, scheduling, or course information.</p>
      <form action="#" class="space-y-8">
          <div>
              <label for="name" class="block mb-2 text-sm font-medium text-[#C8C9C2]">Your Name *</label>
              <input type="text" id="name" class="block p-3 w-full text-sm text-[#909DA9] bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Let us know how we can help you" required />
          </div>
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-[#C8C9C2]">Email Address *</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-[#909DA9] text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-[#C8C9C2]">Contact Number *</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-[#909DA9] bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg sm:w-fit bg-yellow-500:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">Send message</button>
      </form>
  </div>
</section>
    </>
  )
}

export default ContactForm