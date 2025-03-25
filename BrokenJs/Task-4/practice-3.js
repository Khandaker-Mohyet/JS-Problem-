/*as কিওয়ার্ড import এবং export উভয় ক্ষেত্রে নাম পরিবর্তন (alias) করতে ব্যবহৃত হয়। এটি মূলত নতুন নাম দিয়ে রেফার করা সহজ করে তোলে।

Named Export এর ক্ষেত্রে:

export { myFunction as newFunction }; // `myFunction` কে `newFunction` নামে এক্সপোর্ট করা হচ্ছে

import { newFunction } from './module.js'; // নতুন নামে ইমপোর্ট করা হচ্ছে
Import এর ক্ষেত্রে:

import { myFunction as customName } from './module.js'; // ইমপোর্ট করার সময় নাম পরিবর্তন
customName(); // `myFunction` এখন `customName` নামে কাজ করবে
*/