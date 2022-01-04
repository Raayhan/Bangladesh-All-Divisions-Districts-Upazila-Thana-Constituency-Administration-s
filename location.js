function divisionsList() {
    // get value from division lists
    var diviList = document.getElementById('division').value;

    // set barishal division districts
    if (diviList == 'Barishal') {
        var disctList = '<option disabled selected>Select District</option><option value="Barguna">বরগুনা (Barguna)</option><option value="Barishal">বরিশাল (Barishal)</option><option value="Bhola">ভোলা (Bhola)</option><option value="Jhalokati">ঝালকাঁঠি (Jhalokati)</option><option value="Patuakhali">পটুয়াখালী (Patuakhali)</option><option value="Pirojpur">পিরোজপুর (Pirojpur)</option>';
    }
    // set Chattogram division districts
    else if (diviList == 'Chattogram') {
        var disctList = '<option disabled selected>Select District</option><option value="Bandarban">বান্দরবান (Bandarban)</option><option value="Brahmanbaria">ব্রাহ্মণবাড়িয়া (Brahmanbaria)</option><option value="Chandpur">চাঁদপুর (Chandpur)</option><option value="Chattogram">চট্টগ্রাম (Chattogram)</option><option value="Cumilla">কুমিল্লা (Cumilla)</option><option value="Cox\'s Bazar">কক্সবাজার (Cox\'s Bazar)</option><option value="Feni">ফেনী (Feni)</option><option value="Khagrachhari">খাগড়াছড়ি (Khagrachhari)</option><option value="Lakshmipur">লক্ষ্মীপুর (Lakshmipur) </option><option value="Noakhali">নোয়াখালী (Noakhali)</option><option value="Rangamati">রাঙ্গামাটি (Rangamati)</option>';
    }
    // set Dhaka division districts
    else if (diviList == 'Dhaka') {
        var disctList = '<option disabled selected>Select District</option><option value="Dhaka">ঢাকা (Dhaka)</option><option value="Faridpur">ফরিদুর (Faridpur)</option><option value="Gazipur">গাজীপুর (Gazipur)</option><option value="Gopalganj">গোপালগঞ্জ (Gopalganj)</option><option value="Kishoreganj">কিশোরগঞ্জ (Kishoreganj)</option><option value="Madaripur">মাদারীপুর (Madaripur)</option><option value="Manikganj">মানিকগঞ্জ (Manikganj)</option><option value="Munshiganj">মুন্সিগঞ্জ (Munshiganj)</option><option value="Narayanganj">নারায়নগঞ্জ (Narayanganj)</option><option value="Narsingdi">নরসিংদী (Narsingdi)</option><option value="Rajbari">রাজবাড়ী (Rajbari)</option><option value="Shariatpur">শরীয়তপুর (Shariatpur)</option><option value="Tangail">টাঙ্গাইল (Tangail)</option>';
    }
    // set Khulna division districts
    else if (diviList == 'Khulna') {
        var disctList = '<option disabled selected>Select District</option><option value="Bagerhat">বাগেরহাট (Bagerhat)</option><option value="Chuadanga">চুয়াডাঙ্গা (Chuadanga)</option><option value="Jashore">যশোর (Jashore)</option><option value="Jhenaidah">ঝিনাইদহ (Jhenaidah)</option><option value="Khulna">খুলনা (Khulna) </option><option value="Kustia">কুষ্টিয়া (Kustia)</option><option value="Magura">মাগুরা (Magura)</option><option value="Meherpur">মেহেরপুর (Meherpur)</option><option value="Narail">নড়াইল (Narail)</option > <option value="Satkhira">সাতক্ষীরা (Satkhira)</option>';
    }
    // set Mymensingh division districts
    else if (diviList == 'Mymensingh') {
        var disctList = '<option disabled selected>Select District</option><option value="Mymensingh">ময়মনসিংহ (Mymensingh)</option><option value="Netrokona">নেত্রকোনা (Netrokona)</option><option value="Jamalpur">জামালপুর (Jamalpur)</option><option value="Sherpur">শেরপুর (Sherpur)</option>';
    }
    // set Rajshahi division districts
    else if (diviList == 'Rajshahi') {
        var disctList = '<option disabled selected>Select District</option><option value="Bagura">বগুড়া (Bagura)</option><option value="Chapainawabganj">চাঁপাইনবাবগঞ্জ (Chapainawabganj)</option><option value="Joypurhat">জয়পুরহাট (Joypurhat)</option><option value="Naogaon">নওগাঁ (Naogaon)</option><option value="Natore">নাটোর (Natore)</option><option value="Pabna">পাবনা (Pabna)</option><option value="Rajshahi">রাজশাহী (Rajshahi)</option><option value="Sirajganj">সিরাজগঞ্জ (Sirajganj)</option>';
    }
    // set Rangpur division districts
    else if (diviList == 'Rangpur') {
        var disctList = '<option disabled selected>Select District</option><option value="Dinajpur">দিনাজপুর (Dinajpur)</option><option value="Gaibandha">গাইবান্ধা (Gaibandha)</option><option value="Kurigram">কুড়িগ্রাম (Kurigram)</option><option value="Lalmonirhat">লালমনিরহাট (Lalmonirhat)</option><option value="Nilphamari">নীলফামারী (Nilphamari)</option><option value="Panchagarh">পঞ্চগড় (Panchagarh)</option><option value="Rangpur">রংপুর (Rangpur)</option><option value="Thakurgaon">ঠাকুরগাঁও (Thakurgaon)</option>';
    }
    // set Rangpur division districts
    else if (diviList == 'Sylhet') {
        var disctList = '<option disabled selected>Select District</option><option value="Habiganj">হবিগঞ্জ (Habiganj)</option><option value="Moulvibazar">মৌলভীবাজার (Moulvibazar)</option><option value="Sunamganj">সুনামগঞ্জ (Sunamganj)</option><option value="Sylhet">সিলেট (Sylhet)</option>';
    }
    //  set/send districts name to District lists from division
    document.getElementById("district").innerHTML = disctList;
}
//Constituency Section select
function constituencyList() {
    var DisList = document.getElementById('district').value;

    //Barishal Division

    if (DisList == 'Barguna') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Barguna-1">বরগুনা-১ (Barguna-1)</option><option value="Barguna-2">বরগুনা-২ (Barguna-2)</option>'
    }
    if (DisList == 'Barishal') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Barishal-1">বরিশাল-১ (Barishal-1)</option><option value="Barishal-2">বরিশাল-২ (Barishal-2)</option><option value="Barishal-3">বরিশাল-৩ (Barishal-3)</option><option value="Barishal-4">বরিশাল-৪ (Barishal-4)</option><option value="Barishal-5">বরিশাল-৫ (Barishal-5)</option><option value="Barishal-6">বরিশাল-৬ (Barishal-6)</option>'
    }
    if (DisList == 'Bhola') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Bhola-1">ভোলা-১ (Bhola-1)</option><option value="Bhola-2">ভোলা-২ (Bhola-2)</option><option value="Bhola-3">ভোলা- ৩ (Bhola-3)</option><option value="Bhola-4">ভোলা-৪ (Bhola-4)</option>'
    }
    if (DisList == 'Jhalokati') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Jhalokati-1">ঝালকাঠি-১ (Jhalokati-1)</option><option value="Jhalokati-2">ঝালকাঠি--২ (Jhalokati-2)</option>'
    }
    if (DisList == 'Patuakhali') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Patuakhali-1">পটুয়াখালী-১ (Patuakhali-1)</option><option value="Patuakhali-2">পটুয়াখালী-২ (Patuakhali-2)</option><option value="Patuakhali-3">পটুয়াখালী-৩ (Patuakhali-3)</option><option value="Patuakhali-4">পটুয়াখালী-৪ (Patuakhali-4)</option>'
    }
    if (DisList == 'Pirojpur') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Pirojpur-1">পিরোজপুর-১ (Pirojpur-1)</option><option value="Pirojpur-2">পিরোজপুর-২ (Pirojpur-2)</option><option value="Pirojpur-3">পিরোজপুর-৩ (Pirojpur-3)</option>'
    }

    //Chittagong Division
    if (DisList == 'Bandarban') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Bandarban">বান্দরবান (Bandarban)</option>'
    }
    if (DisList == 'Brahmanbaria') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Brahmanbaria-1">ব্রাহ্মণবাড়িয়া-১ (Brahmanbaria-1)</option><option value="Brahmanbaria-2">ব্রাহ্মণবাড়িয়া-২ (Brahmanbaria-2)</option><option value="Brahmanbaria-3">ব্রাহ্মণবাড়িয়া-৩ (Brahmanbaria-3)</option><option value="Brahmanbaria-4">ব্রাহ্মণবাড়িয়া-৪ (Brahmanbaria-4)</option><option value="Brahmanbaria-5">ব্রাহ্মণবাড়িয়া-৫ (Brahmanbaria-5)</option><option value="Brahmanbaria-6">ব্রাহ্মণবাড়িয়া-৬ (Brahmanbaria-6)</option>'
    }
    if (DisList == 'Chandpur') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Chandpur-1">চাঁদপুর-১ (Chandpur-1)</option><option value="Chandpur-2">চাঁদপুর-২ (Chandpur-2)</option><option value="Chandpur-3">চাঁদপুর-৩ (Chandpur-3)</option><option value="Chandpur-4">চাঁদপুর-৪ (Chandpur-4)</option><option value="Chandpur-5">চাঁদপুর-৫ (Chandpur-5)</option>'
    }
    if (DisList == 'Chattogram') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Chittagong-1">চট্টগ্রাম-১ (Chittagong-1)</option><option value="Chittagong-2">চট্টগ্রাম-২ (Chittagong-2)</option><option value="Chittagong-3">চট্টগ্রাম-৩ (Chittagong-3)</option><option value="Chittagong-4">চট্টগ্রাম-৪ (Chittagong-4)</option><option value="Chittagong-5">চট্টগ্রাম-৫ (Chittagong-5)</option><option value="Chittagong-6">চট্টগ্রাম-৬ (Chittagong-6)</option><option value="Chittagong-7">চট্টগ্রাম-৭ (Chittagong-7)</option><option value="Chittagong-8">চট্টগ্রাম-৮ (Chittagong-8)</option><option value="Chittagong-9">চট্টগ্রাম-৯ (Chittagong-9)</option><option value="Chittagong-10">চট্টগ্রাম-১০ (Chittagong-10)</option><option value="Chittagong-11">চট্টগ্রাম-১১ (Chittagong-11)</option><option value="Chittagong-12">চট্টগ্রাম-১২ (Chittagong-12)</option><option value="Chittagong-13">চট্টগ্রাম-১৩ (Chittagong-13)</option><option value="Chittagong-14">চট্টগ্রাম-১৪ (Chittagong-14)</option><option value="Chittagong-15">চট্টগ্রাম-১৫ (Chittagong-15)</option><option value="Chittagong-16">চট্টগ্রাম-১৬ (Chittagong-16)</option>'
    }
    if (DisList == 'Cumilla') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Comilla-1">কুমিল্লা-১ (Comilla-1)</option><option value="Comilla-2">কুমিল্লা-২ (Comilla-2)</option><option value="Comilla-3">কুমিল্লা-৩ (Comilla-3)</option><option value="Comilla-4">কুমিল্লা-৪ (Comilla-4)</option><option value="Comilla-5">কুমিল্লা-৫ (Comilla-5)</option><option value="Comilla-6">কুমিল্লা-৬ (Comilla-6)</option><option value="Comilla-7">কুমিল্লা-৭ (Comilla-7)</option><option value="Comilla-8">কুমিল্লা-৮ (Comilla-8)</option><option value="Comilla-9">কুমিল্লা-৯ (Comilla-9)</option><option value="Comilla-10">কুমিল্লা-১০ (Comilla-10)</option><option value="Comilla-11">কুমিল্লা-১১ (Comilla-11)</option><option value="Comilla-12">কুমিল্লা-১২ (Comilla-12)</option>'
    }
    if (DisList == 'Cox\'s Bazar') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Cox\'s Bazar-1">কক্সবাজার-১ (Cox\'s Bazar-1)</option><option value="Cox\'s Bazar-2">কক্সবাজার-২ (Cox\'s Bazar-2)</option><option value="Cox\'s Bazar-3">কক্সবাজার-৩ (Cox\'s Bazar-3)</option><option value="Cox\'s Bazar-4">কক্সবাজার-৪ (Cox\'s Bazar-4)</option>'
    }
    if (DisList == 'Feni') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Feni-1">ফেনী-১ (Feni-1)</option><option value="Feni-2">ফেনী-২ (Feni-2)</option><option value="Feni-3">ফেনী-৩ (Feni-3)</option>'
    }
    if (DisList == 'Khagrachhari') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Khagrachhari">খাগড়াছড়ি (Khagrachhari)</option>'
    }
    if (DisList == 'Lakshmipur') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Lakshmipur-1">লক্ষ্মীপুর-১ (Lakshmipur-1)</option><option value="Lakshmipur-2">লক্ষ্মীপুর-২ (Lakshmipur-2)</option><option value="Lakshmipur-3">লক্ষ্মীপুর-৩ (Lakshmipur-3)</option><option value="Lakshmipur-4">লক্ষ্মীপুর-৪ (Lakshmipur-4)</option>'
    }
    if (DisList == 'Noakhali') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Noakhali-1">নোয়াখালী-১ (Noakhali-1)</option><option value="Noakhali-2">নোয়াখালী-২ (Noakhali-2)</option><option value="Noakhali-3">নোয়াখালী-৩ (Noakhali-3)</option><option value="Noakhali-4">নোয়াখালী-৪ (Noakhali-4)</option><option value="Noakhali-5">নোয়াখালী-৫ (Noakhali-5)</option><option value="Noakhali-6">নোয়াখালী-৬ (Noakhali-6)</option>'
    }
    if (DisList == 'Rangamati') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Ramngamati">রাঙ্গামাটি (Rangamati</option>'
    }

    //Dhaka Division
    if (DisList == 'Dhaka') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Dhaka-1">ঢাকা-১ (Dhaka-1)</option><option value="Dhaka-2">ঢাকা-২ (Dhaka-2)</option><option value="Dhaka-3">ঢাকা-৩ (Dhaka-3)</option><option value="Dhaka-4">ঢাকা-৪ (Dhaka-4)</option><option value="Dhaka-5">ঢাকা-৫ (Dhaka-5)</option><option value="Dhaka-6">ঢাকা-৬ (Dhaka-6)</option><option value="Dhaka-7">ঢাকা-৭ (Dhaka-7)</option><option value="Dhaka-8">ঢাকা-৮ (Dhaka-8)</option><option value="Dhaka-9">ঢাকা-৯ (Dhaka-9)</option><option value="Dhaka-10">ঢাকা-১০ (Dhaka-10)</option><option value="Dhaka-11">ঢাকা-১১ (Dhaka-11)</option><option value="Dhaka-12">ঢাকা-১২ (Dhaka-12)</option><option value="Dhaka-13">ঢাকা-১৩ (Dhaka-13)</option><option value="Dhaka-14">ঢাকা-১৪ (Dhaka-14)</option><option value="Dhaka-15">ঢাকা-১৫ (Dhaka-15)</option><option value="Dhaka-16">ঢাকা-১৬ (Dhaka-16)</option><option value="Dhaka-17">ঢাকা-১৭ (Dhaka-17)</option><option value="Dhaka-18">ঢাকা-১৮ (Dhaka-18)</option><option value="Dhaka-19">ঢাকা-১৯ (Dhaka-19)</option><option value="Dhaka-20">ঢাকা-২০ (Dhaka-20)</option>'
    }
    if (DisList == 'Faridpur') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Faridpur-1">ফরিদপুর-১ (Faridpur-1)</option><option value="Faridpur-2">ফরিদপুর-২ (Faridpur-2)</option><option value="Faridpur-3">ফরিদপুর-৩ (Faridpur-3)</option><option value="Faridpur-4">ফরিদপুর-৪ (Faridpur-4)</option>'
    }
    if (DisList == 'Gazipur') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Gazipur-1">গাজীপুর-১ (Gazipur-1)</option><option value="Gazipur-2">গাজীপুর-২ (Gazipur-2)</option><option value="Gazipur-3">গাজীপুর-৩ (Gazipur-3)</option><option value="Gazipur-4">গাজীপুর-৪ (Gazipur-4)</option><option value="Gazipur-5">গাজীপুর-৫ (Gazipur-5)</option>'
    }
    if (DisList == 'Gopalganj') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Gopalganj-1">গোপালগঞ্জ-১ (Gopalganj-1)</option><option value="Gopalganj-2">গোপালগঞ্জ-২ (Gopalganj-2)</option><option value="Gopalganj-3">গোপালগঞ্জ-৩ (Gopalganj-3)</option>'
    }
    if (DisList == 'Kishoreganj') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Kishoreganj-1">কিশোরগঞ্জ- ১ (Kishoreganj-1)</option><option value="Kishoreganj-2">কিশোরগঞ্জ- ২ (Kishoreganj-2)</option><option value="Kishoreganj-3">কিশোরগঞ্জ- ৩ (Kishoreganj-3)</option><option value="Kishoreganj-4">কিশোরগঞ্জ- ৪ (Kishoreganj-4)</option><option value="Kishoreganj-5">কিশোরগঞ্জ- ৫ (Kishoreganj-5)</option><option value="Kishoreganj-6">কিশোরগঞ্জ- ৬ (Kishoreganj-6)</option>'
    }
    if (DisList == 'Madaripur') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Madaripur-1">মাদারীপুর-১ (Madaripur-1)</option><option value="Madaripur-2">মাদারীপুর-২ (Madaripur-2)</option><option value="Madaripur-3">মাদারীপুর-৩ (Madaripur-3)</option>'
    }
    if (DisList == 'Manikganj') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Manikganj-1">মানিকগঞ্জ-১ (Manikganj-1)</option><option value="Manikganj-2">মানিকগঞ্জ-২ (Manikganj-2)</option><option value="Manikanj-3">মানিকগঞ্জ-৩ (Manikganj-3)</option>'
    }
    if (DisList == 'Munshiganj') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Munshiganj-1">মুন্সিগঞ্জ-১ (Munshiganj-1)</option><option value="Munshiganj-2">মুন্সিগঞ্জ-২ (Munshiganj-2)</option><option value="Munshiganj-3">মুন্সিগঞ্জ-৩ (Munshiganj-3)</option>'
    }
    if (DisList == 'Narayanganj') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Narayanganj-1">নারায়নগঞ্জ-১ (Narayanganj-1)</option><option value="Narayanganj-2">নারায়নগঞ্জ-২ (Narayanganj-2)</option><option value="Narayanganj-3">নারায়নগঞ্জ-৩ (Narayanganj-3)</option><option value="Narayanganj-4">নারায়নগঞ্জ-৪ (Narayanganj-4)</option><option value="Narayanganj-5">নারায়নগঞ্জ-৫ (Narayanganj-5)</option>'
    }
    if (DisList == 'Narsingdi') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Narsingdi-1">নরসিংদী-১ (Narsingdi-1)</option><option value="Narsingdi-2">নরসিংদী-২ (Narsingdi-2)</option><option value="Narsingdi-3">নরসিংদী-৩ (Narsingdi-3)</option><option value="Narsingdi-4">নরসিংদী-৪ (Narsingdi-4)</option><option value="Narsingdi-5">নরসিংদী-৫ (Narsingdi-5)</option>'
    }
    if (DisList == 'Rajbari') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Rajbari-1">রাজবাড়ী-১ (Rajbari-1)</option><option value="Rajbari-2">রাজবাড়ী-২ (Rajbari-2)</option>'
    }
    if (DisList == 'Shariatpur') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Shariatpur-1">শরীয়তপুর-১ (Shariatpur-1)</option><option value="Shariatpur-2">শরীয়তপুর-২ (Shariatpur-2)</option><option value="Shariatpur-3">শরীয়তপুর-৩ (Shariatpur-3)</option>'
    }
    if (DisList == 'Tangail') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Tangail-1">টাঙ্গাইল-১ (Tangail-1)</option><option value="Tangail-2">টাঙ্গাইল-২ (Tangail-2)</option><option value="Tangail-3">টাঙ্গাইল-৩ (Tangail-3)</option><option value="Tangail-4">টাঙ্গাইল-৪ (Tangail-4)</option><option value="Tangail-5">টাঙ্গাইল-৫ (Tangail-5)</option><option value="Tangail-6">টাঙ্গাইল-৬ (Tangail-6)</option><option value="Tangail-7">টাঙ্গাইল-৭ (Tangail-7)</option><option value="Tangail-8">টাঙ্গাইল-৮ (Tangail-8)</option>'
    }
    // Khulna Division
    if (DisList == 'Bagerhat') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Bagerhat-1">বাগেরহাট-১ (Bagerhat-1)</option><option value="Bagerhat-2">বাগেরহাট-২ (Bagerhat-2)</option><option value="Bagerhat-3">বাগেরহাট-৩ (Bagerhat-3)</option><option value="Bagerhat-4">বাগেরহাট-৪ (Bagerhat-4)</option>'
    }
    if (DisList == 'Chuadanga') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Chuadanga-1">চুয়াডাঙ্গা-১ (Chuadanga-1)</option><option value="Chuadanga-2">চুয়াডাঙ্গা-২ (Chuadanga-2)</option>'
    }
    if (DisList == 'Jashore') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Jashore-1">যশোর-১ (Jashore-1)</option><option value="Jashore-2">যশোর-২ (Jashore-2)</option><option value="Jashore-3">যশোর-৩ (Jashore-3)</option><option value="Jashore-4">যশোর-৪ (Jashore-4)</option><option value="Jashore-5">যশোর-৫ (Jashore-5)</option><option value="Jashore-6">যশোর-৬ (Jashore-6)</option>'
    }
    if (DisList == 'Jhenaidah') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Jhenaidah-1">ঝিনাইদহ-১ (Jhenaidah-1)</option><option value="Jhenaidah-2">ঝিনাইদহ-২ (Jhenaidah-2)</option><option value="Jhenaidah-3">ঝিনাইদহ-৩ (Jhenaidah-3)</option><option value="Jhenaidah-4">ঝিনাইদহ-৪ (Jhenaidah-4)</option>'
    }
    if (DisList == 'Khulna') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Khulna-1">খুলনা-১ (Khulna-1)</option><option value="Khulna-2">খুলনা-২ (Khulna-2)</option><option value="Khulna-3">খুলনা-৩ (Khulna-3)</option><option value="Khulna-4">খুলনা-৪ (Khulna-4)</option><option value="Khulna-5">খুলনা-৫ (Khulna-5)</option><option value="Khulna-6">খুলনা-৬ (Khulna-6)</option>'
    }
    if (DisList == 'Kustia') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Kustia-1">কুষ্টিয়া-১ (Kustia-1)</option><option value="Kustia-2">কুষ্টিয়া-২ (Kustia-2)</option><option value="Kustia-3">কুষ্টিয়া-৩ (Kustia-3)</option><option value="Kustia-4">কুষ্টিয়া-৪ (Kustia-4)</option>'
    }
    if (DisList == 'Magura') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Magura-1">মাগুরা-১ (Magura-1)</option><option value="Magura-2">মাগুরা-২ (Magura-2)</option>'
    }
    if (DisList == 'Meherpur') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Meherpur-1">মেহেরপুর-১ (Meherpur-1)</option><option value="Meherpur-2">মেহেরপুর-২ (Meherpur-2)</option>'
    }
    if (DisList == 'Narail') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Narail-1">নড়াইল-১ (Narail-1)</option><option value="Narail-2">নড়াইল-২ (Narail-2)</option>'
    }
    if (DisList == 'Satkhira') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Satkhira-1">সাতক্ষীরা-১ (Satkhira-1)</option><option value="Satkhira-2">সাতক্ষীরা-২ (Satkhira-2)</option><option value="Satkhira-3">সাতক্ষীরা-৩ (Satkhira-3)</option><option value="Satkhira-4">সাতক্ষীরা-৪ (Satkhira-4)</option>'
    }

    //Mymensingh Division
    if (DisList == 'Mymensingh') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Mymensingh-1">ময়মনসিংহ-১ (Mymensingh-1)</option><option value="Mymensingh-2">ময়মনসিংহ-২ (Mymensingh-2)</option><option value="Mymensingh-3">ময়মনসিংহ-৩ (Mymensingh-3)</option><option value="Mymensingh-4">ময়মনসিংহ-৪ (Mymensingh-4)</option><option value="Mymensingh-5">ময়মনসিংহ-৫ (Mymensingh-5)</option><option value="Mymensingh-6">ময়মনসিংহ-৬ (Mymensingh-6)</option><option value="Mymensingh-7">ময়মনসিংহ-৭ (Mymensingh-7)</option><option value="Mymensingh-8">ময়মনসিংহ-৮ (Mymensingh-8)</option><option value="Mymensingh-9">ময়মনসিংহ-৯ (Mymensingh-9)</option><option value="Mymensingh-10">ময়মনসিংহ-১০ (Mymensingh-10)</option><option value="Mymensingh-11">ময়মনসিংহ-১১ (Mymensingh-11)</option>'
    }
    if (DisList == 'Netrokona') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Netrokona-1">নেত্রকোণা-১ (Netrokona-1)</option><option value="Netrokona-2">নেত্রকোণা-২ (Netrokona-2)</option><option value="Netrokona-3">নেত্রকোণা-৩ (Netrokona-3)</option><option value="Netrokona-4">নেত্রকোণা-৪ (Netrokona-4)</option><option value="Netrokona-5">নেত্রকোণা-৫ (Netrokona-5)</option>'
    }
    if (DisList == 'Jamalpur') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Jamalpur-1">জামালপুর-১ (Jamalpur-1)</option><option value="Jamalpur-2">জামালপুর-২ (Jamalpur-2)</option><option value="Jamalpur-3">জামালপুর-৩ (Jamalpur-3)</option><option value="Jamalpur-4">জামালপুর-৪ (Jamalpur-4)</option><option value="Jamalpur-5">জামালপুর-৫ (Jamalpur-5)</option>'
    }
    if (DisList == 'Sherpur') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Sherpur-1">শেরপুর-১ (Sherpur-1)</option><option value="Sherpur-2">শেরপুর-২ (Sherpur-2)</option><option value="Sherpur-3">শেরপুর-৩ (Sherpur-3)</option>'
    }

    //Rajshahi Division
    if (DisList == 'Bagura') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Bagura-1">বগুড়া-১ (Bagura-1)</option><option value="Bagura-2">বগুড়া-২ (Bagura-2)</option><option value="Bagura-3">বগুড়া-৩ (Bagura-3)</option><option value="Bagura-4">বগুড়া-৪ (Bagura-4)</option><option value="Bagura-5">বগুড়া-৫ (Bagura-5)</option><option value="Bagura-6">বগুড়া-৬ (Bagura-6)</option><option value="Bagura-7">বগুড়া-৭ (Bagura-7)</option>'
    }
    if (DisList == 'Chapainawabganj') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Chapainawabganj-1">চাঁপাইনবাবগঞ্জ-১ (Chapainawabganj-1)</option><option value="Chapainawabganj-2">চাঁপাইনবাবগঞ্জ-২ (Chapainawabganj-2)</option><option value="Chapainawabganj-3">চাঁপাইনবাবগঞ্জ-৩ (Chapainawabganj-3)</option>'
    }
    if (DisList == 'Joypurhat') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Joypurhat-1">জয়পুরহাট-১ (Joypurhat-1)</option><option value="Joypurhat-2">জয়পুরহাট-২ (Joypurhat-2)</option><option value="Joypurhat-3">জয়পুরহাট-৩ (Joypurhat-3)</option>'
    }
    if (DisList == 'Naogaon') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Naogaon-1">নওগাঁ-১ (Naogaon-1)</option><option value="Naogaon-2">নওগাঁ-২ (Naogaon-2)</option><option value="Naogaon-3">নওগাঁ-৩ (Naogaon-3)</option><option value="Naogaon-4">নওগাঁ-৪ (Naogaon-4)</option><option value="Naogaon-5">নওগাঁ-৫ (Naogaon-5)</option><option value="Naogaon-6">নওগাঁ-৬ (Naogaon-6)</option>'
    }
    if (DisList == 'Natore') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Natore-1">নাটোর-১ (Natore-1)</option><option value="Natore-2">নাটোর-২ (Natore-2)</option><option value="Natore-3">নাটোর-৩ (Natore-3)</option><option value="Natore-4">নাটোর-৪ (Natore-4)</option>'
    }
    if (DisList == 'Pabna') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Pabna-1">পাবনা-১ (Pabna-1)</option><option value="Pabna-2">পাবনা-২ (Pabna-2)</option><option value="Pabna-3">পাবনা-৩ (Pabna-3)</option><option value="Pabna-4">পাবনা-৪ (Pabna-4)</option><option value="Pabna-5">পাবনা-৫ (Pabna-5)</option>'
    }
    if (DisList == 'Rajshahi') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Rajshahi-1">রাজশাহী-১ (Rajshahi-1)</option><option value="Rajshahi-2">রাজশাহী-২ (Rajshahi-2)</option><option value="Rajshahi-3">রাজশাহী-৩ (Rajshahi-3)</option><option value="Rajshahi-4">রাজশাহী-৪ (Rajshahi-4)</option><option value="Rajshahi-5">রাজশাহী-৫ (Rajshahi-5)</option><option value="Rajshahi-6">রাজশাহী-৬ (Rajshahi-6)</option>'
    }
    if (DisList == 'Sirajganj') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Sirajganj-1">সিরাজগঞ্জ-১ (Sirajganj-1)</option><option value="Sirajganj-2">সিরাজগঞ্জ-২ (Sirajganj-2)</option><option value="Sirajganj-3">সিরাজগঞ্জ-৩ (Sirajganj-3)</option><option value="Sirajganj-4">সিরাজগঞ্জ-৪ (Sirajganj-4)</option><option value="Sirajganj-5">সিরাজগঞ্জ-৫ (Sirajganj-5)</option><option value="Sirajganj-6">সিরাজগঞ্জ-৬ (Sirajganj-6)</option>'
    }
    //Rangpur Division 

    if (DisList == 'Dinajpur') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Dinajpur-1">দিনাজপুর-১ (Dinajpur-1)</option><option value="Dinajpur-2">দিনাজপুর-২ (Dinajpur-2)</option><option value="Dinajpur-3">দিনাজপুর-৩ (Dinajpur-3)</option><option value="Dinajpur-4">দিনাজপুর-৪ (Dinajpur-4)</option><option value="Dinajpur-5">দিনাজপুর-৫ (Dinajpur-5)</option><option value="Dinajpur-6">দিনাজপুর-৬ (Dinajpur-6)</option>'
    }
    if (DisList == 'Gaibandha') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Gaibandha-1">গাইবান্ধা-১ (Gaibandha-1)</option><option value="Gaibandha-2">গাইবান্ধা-২ (Gaibandha-2)</option><option value="Gaibandha-3">গাইবান্ধা-৩ (Gaibandha-3)</option><option value="Gaibandha-4">গাইবান্ধা-৪ (Gaibandha-4)</option><option value="Gaibandha-5">গাইবান্ধা-৫ (Gaibandha-5)</option>'
    }
    if (DisList == 'Kurigram') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Kurigram-1">কুড়িগ্রাম-১ (Kurigram-1)</option><option value="Kurigram-2">কুড়িগ্রাম-২ (Kurigram-2)</option><option value="Kurigram-3">কুড়িগ্রাম-৩ (Kurigram-3)</option><option value="Kurigram-4">কুড়িগ্রাম-৪ (Kurigram-4)</option>'
    }
    if (DisList == 'Lalmonirhat') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Lalmonirhat-1">লালমনিরহাট-১ (Lalmonirhat-1)</option><option value="Lalmonirhat-2">লালমনিরহাট-২ (Lalmonirhat-2)</option><option value="Lalmonirhat-3">লালমনিরহাট-৩ (Lalmonirhat-3)</option>'
    }
    if (DisList == 'Nilphamari') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Nilphamari-1">নীলফামারী-১ (Nilphamari-1)</option><option value="Nilphamari-2">নীলফামারী-২ (Nilphamari-2)</option><option value="Nilphamari-3">নীলফামারী-৩ (Nilphamari-3)</option><option value="Nilphamari-4">নীলফামারী-৪ (Nilphamari-4)</option>'
    }
    if (DisList == 'Panchagarh') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Panchagarh-1">পঞ্চগড়-১ (Panchagarh-1)</option><option value="Panchagarh-2">পঞ্চগড়-২ (Panchagarh-2)</option>'
    }
    if (DisList == 'Rangpur') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Rangpur-1">রংপুর-১ (Rangpur-1)</option><option value="Rangpur-2">রংপুর-২ (Rangpur-2)</option><option value="Rangpur-3">রংপুর-৩ (Rangpur-3)</option><option value="Rangpur-4">রংপুর-৪ (Rangpur-4)</option><option value="Rangpur-5">রংপুর-৫ (Rangpur-5)</option><option value="Rangpur-6">রংপুর-৬ (Rangpur-6)</option>'
    }
    if (DisList == 'Thakurgaon') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Thakurgaon-1">ঠাকুরগাঁও-১ (Thakurgaon-1)</option><option value="Thakurgaon-2">ঠাকুরগাঁও-২ (Thakurgaon-2)</option><option value="Thakurgaon-3">ঠাকুরগাঁও-৩ (Thakurgaon-3)</option>'
    }

    //Sylhet Division
    if (DisList == 'Habiganj') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Habiganj-1">হবিগঞ্জ-১ (Habiganj-1)</option><option value="Habiganj-2">হবিগঞ্জ-২ (Habiganj-2)</option><option value="Habiganj-3">হবিগঞ্জ-৩ (Habiganj-3)</option><option value="Habiganj-4">হবিগঞ্জ-৪ (Habiganj-4)</option>'
    }
    if (DisList == 'Moulvibazar') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Moulvibazar-1">মৌলভীবাজার-১ (Moulvibazar-1)</option><option value="Moulvibazar-2">মৌলভীবাজার-২ (Moulvibazar-2)</option><option value="Moulvibazar-3">মৌলভীবাজার-৩ (Moulvibazar-3)</option><option value="Moulvibazar-4">মৌলভীবাজার-৪ (Moulvibazar-4)</option>'
    }
    if (DisList == 'Sunamganj') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Sunamganj-1">সুনামগঞ্জ-১ (Sunamganj-1)</option><option value="Sunamganj-2">সুনামগঞ্জ-২ (Sunamganj-2)</option><option value="Sunamganj-3">সুনামগঞ্জ-৩ (Sunamganj-3)</option><option value="Sunamganj-4">সুনামগঞ্জ-৪ (Sunamganj-4)</option><option value="Sunamganj-5">সুনামগঞ্জ-৫ (Sunamganj-5)</option>'
    }
    if (DisList == 'Sylhet') {
        var constituencyList = '<option disabled selected>Select Constituency</option><option value="Sylhet-1">সিলেট-১ (Sylhet-1)</option><option value="Sylhet-2">সিলেট-২ (Sylhet-2)</option><option value="Sylhet-3">সিলেট-৩ (Sylhet-3)</option><option value="Sylhet-4">সিলেট-৪ (Sylhet-4)</option><option value="Sylhet-5">সিলেট-৫ (Sylhet-5)</option><option value="Sylhet-6">সিলেট-৬ (Sylhet-6)</option>'
    }
    document.getElementById("constituency").innerHTML = constituencyList;
}
//Administration Section select
function adminList() {
    var DisList = document.getElementById('district').value;

    //Barishal Division

    if (DisList == 'Barguna') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Amtali Municipality">আমতলী পৌরসভা (Amtali Municipality)</option><option value="Barguna Municipality">বরগুনা পৌরসভা (Barguna Municipality)</option><option value="Betagi Municipality">বেতাগী পৌরসভা (Betagi Municipality)</option><option value="Patharghata Municipality">পাথরঘাটা পৌরসভা (Patharghata Municipality)</option>';
    }
    if (DisList == 'Barishal') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Barishal City Corporation">বরিশাল সিটি কর্পোরেশন (Barishal City Corporation)</option><option value="Bakerganj Municipality">বাকেরগঞ্জ পৌরসভা (Bakerganj Municipality)</option><option value="Banaripara Municipality">বানারীপাড়া পৌরসভা (Banaripara Municipality)</option><option value="Gournadi Municipality">গৌড়নদী পৌরসভা (Gournadi Municipality)</option><option value="Mehendiganj Municipality">মেহেন্দিগঞ্জ পৌরসভা (Mehendiganj Municipality)</option><option value="Muladi Municipality">মুলাদী পৌরসভা (Muladi Municipality)</option><option value="Wazirpur Municipality">উজিরপুর পৌরসভা (Wazirpur Municipality)</option>';
    }
    if (DisList == 'Bhola') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Bhola Municipality">ভোলা পৌরসভা (Bhola Municipality)</option><option value="Lalmohon Municipality">লালমোহন পৌরসভা (Lalmohon Municipality)</option><option value="Char Fasson Municipality">চরফ্যাশন পৌরসভা (Char Fasson Municipality)</option><option value="Burhanuddin Municipality">বোরহান উদ্দিন পৌরসভা (Burhanuddin Municipality)</option><option value="Daulatkhan Municipality">দৌলতখান পৌরসভা (Daulatkhan Municipality)</option>';
    }
    if (DisList == 'Jhalokati') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Jhalokati Municipality">ঝালকাঁঠি পৌরসভা (Jhalokati Municipality)</option><option value="Nalchity Municipality">নলছিটি পৌরসভা (Nalchity Municipality)</option>';
    }
    if (DisList == 'Patuakhali') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Patuakhali Municipality">পটুয়াখালী পৌরসভা (Patuakhali Municipality)</option><option value="Galachipa Municipality">গলাচিপা পৌরসভা (Galachipa Municipality)</option><option value="Bauphal Municipality">বাউফল পৌরসভা (Bauphal Municipality)</option><option value="Kolapara Municipality">কলাপাড়া পৌরসভা (Kolapara Municipality)</option><option value="Kuakata Municipality">কুয়াকাটা পৌরসভা (Kuakata Municipality)</option>';
    }
    if (DisList == 'Pirojpur') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Pirojpur Municipality">পিরোজপুর পৌরসভা (Pirojpur Municipality)</option><option value="Swarupkathi Municipality">স্বরূপকাঠি পৌরসভা (Swarupkathi Municipality)</option><option value="Mathbaria Municipality">মঠবাড়ীয়া পৌরসভা (Mathbaria Municipality)</option><option value="Bhandaria Municipality">ভান্ডারিয়া পৌরসভা (Bhandaria Municipality)</option>';
    }

    //Chittagong Division
    if (DisList == 'Bandarban') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Bandarban Municipality">বান্দরবান পৌরসভা (Bandarban Municipality)</option><option value="Lama Municipality">লামা পৌরসভা (Lama Municipality)</option>';
    }
    if (DisList == 'Brahmanbaria') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Brahmanbaria Municipality">ব্রাহ্মণবাড়িয়া পৌরসভা (Brahmanbaria Municipality)</option><option value="Nabingara Municipality">নবীনগর পৌরসভা (Nabingara Municipality)</option><option value="Akhaura Municipality">আখাউড়া পৌরসভা (Akhaura Municipality)</option><option value="Kasba Municipality">কসবা পৌরসভা (Kasba Municipality)</option>';
    }
    if (DisList == 'Chandpur') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Chandpur Municipality">চাঁদপুর পৌরসভা (Chandpur Municipality)</option><option value="Hajiganj Municipality">হাজীগঞ্জ পৌরসভা (Hajiganj Municipality)</option><option value="Kachua Municipality">কচুয়া পৌরসভা (Kachua Municipality)</option><option value="Chengaracara Municipality">ছেংগারচর পৌরসভা (Chengaracara Municipality)</option><option value="Matlab Municipality">মতলব পৌরসভা (Matlab Municipality)</option><option value="Shahrasti Municipality">শহরাস্তি পৌরসভা (Shahrasti Municipality)</option><option value="Faridganj Municipality">ফরিদগঞ্জ পৌরসভা (Faridganj Municipality)</option>';
    }
    if (DisList == 'Chattogram') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Chittagong City Corporation">চট্টগ্রাম সিটি কর্পোরেশন (Chittagong City Corporation)</option><option value="Banshkhali Municipality">বাঁশখালী পৌরসভা (Banshkhali Municipality)</option><option value="Baroiyarhat Municipality">বারৈয়ারহাট পৌরসভা (Baroiyarhat Municipality)</option><option value="Boalkhali Municipality">বোয়ালখালী পৌরসভা (Boalkhali Municipality)</option><option value="Chandanaish Municipality">চন্দনাইশ পৌরসভা (Chandanaish Municipality)</option><option value="Fatikchhari Municipality">ফটিকছড়ি পৌরসভা (Fatikchhari Municipality)</option><option value="Hathazari Municipality">হাটহাজারী পৌরসভা (Hathazari Municipality)</option><option value="Mirsharai Municipality">মীরসরাই পৌরসভা (Mirsharai Municipality)</option><option value="Nazirhat Municipality">নাজিরহাট পৌরসভা (Nazirhat Municipality)</option><option value="Patiya Municipality">পটিয়া পৌরসভা (Patiya Municipality)</option><option value="Raozan Municipality">রাউজান পৌরসভা (Raozan Municipality)</option><option value="Sandwip Municipality">সন্দ্বীপ পৌরসভা (Sandwip Municipality)</option><option value="Satkania Municipality">সাতকানিয়া  পৌরসভা(Satkania Municipality)</option>';
    }
    if (DisList == 'Cumilla') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Cumilla City Corporation">কুমিল্লা সিটি কর্পোরেশন (Cumilla City Corporation)</option><option value="Baruara Municipality">বরুড়া পৌরসভা (Baruara Municipality)</option><option value="Chandina Municipality">চান্দিনা পৌরসভা (Chandina Municipality)</option><option value="Chauddagram Municipality">চৌদ্দগ্রাম পৌরসভা (Chauddagram Municipality)</option><option value="Debidwar Municipality">দেবিদ্বার পৌরসভা (Debidwar Municipality)</option><option value="Daudkandi Municipality">দাউদকান্দি পৌরসভা (Daudkandi Municipality)</option><option value="Homna Municipality">হোমনা পৌরসভা (Homna Municipality)</option><option value="Laksham Municipality">লাকসাম পৌরসভা (Laksham Municipality)</option><option value="Nangalkot Municipality">নাঙ্গলকোট পৌরসভা (Nangalkot Municipality)</option>';
    }
    if (DisList == 'Cox\'s Bazar') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Chakaria Municipality">চকরিয়া পৌরসভা (Chakaria Municipality)</option><option value="Cox\'s Bazar Municipality">কক্সবাজার পৌরসভা (Cox\'s Bazar Municipality)</option><option value="Maheshkhali Municipality">মহেশখালী পৌরসভা (Maheshkhali Municipality)</option><option value="Teknaf Municipality">টেকনাফ পৌরসভা (Teknaf Municipality)</option>';
    }
    if (DisList == 'Feni') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Chhagalnaiya Municipality">ছাগলনাইয়া পৌরসভা (Chhagalnaiya Municipality)</option><option value="Daganbhuiyan Municipality">দাগনভূঞা পৌরসভা (Daganbhuiyan Municipality)</option><option value="Feni Municipality">ফেনী পৌরসভা (Feni Municipality)</option><option value="Parshuram Municipality">পরশুরাম পৌরসভা (Parshuram Municipality)</option><option value="Sonagazi Municipality">সোনাগাজী পৌরসভা (Sonagazi Municipality)</option>';
    }
    if (DisList == 'Khagrachhari') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Khagrachhari Municipality">খাগড়াছড়ি পৌরসভা (Khagrachhari Municipality)</option><option value="Ramgarh Municipality">রামগড় পৌরসভা (Ramgarh Municipality)</option><option value="Matiranga Municipality">মাটিরাঙ্গা পৌরসভা (Matiranga Municipality)</option>';
    }
    if (DisList == 'Lakshmipur') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Lakshmipur Municipality">লক্ষ্মীপুর পৌরসভা (Lakshmipur Municipality)</option><option value="Raipur Municipality">রায়পুর পৌরসভা (Raipur Municipality)</option><option value="Ramganj Municipality">রামগঞ্জ পৌরসভা (Ramganj Municipality)</option><option value="Ramgoti Municipality">রামগতি পৌরসভা (Ramgoti Municipality)</option>';
    }
    if (DisList == 'Noakhali') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Bashurhat Municipality">বসুরহাট পৌরসভা (Bashurhat Municipality)</option><option value="Chatkhil Municipality">চাটখিল পৌরসভা (Chatkhil Municipality)</option><option value="Chowmuhani Municipality">চৌমুহনী পৌরসভা (Chowmuhani Municipality)</option><option value="Hatia Municipality">হাতিয়া পৌরসভা (Hatia Municipality)</option><option value="Kabirhat Municipality">কবিরহাট পৌরসভা (Kabirhat Municipality)</option><option value="Noakhali Municipality">নোয়াখালী পৌরসভা (Noakhali Municipality)</option><option value="Senbagh Municipality">সেনবাগ পৌরসভা (Senbagh Municipality)</option><option value="Sonaimuri Municipality">সোনাইমুড়ী পৌ (Sonaimuri Municipality)</option>';
    }
    if (DisList == 'Rangamati') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Rangamati Municipality">রাঙ্গামাটি পৌরসভা (Rangamati Municipality)</option><option value="Baghachari Municipality">বাঘাইছড়ি পৌরসভা (Baghaichari Municipality)</option>';
    }

    //Dhaka Division
    if (DisList == 'Dhaka') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Dhaka North City Corporation">ঢাকা উত্তর সিটি কর্পোরেশন (Dhaka North City Corporation)</option><option value="Dhaka South City Corporation">ঢাকা দক্ষিণ সিটি কর্পোরেশন (Dhaka South City Corporation)</option><option value="Dhamrai Municipality">ধামরাই পৌরসভা (Dhamrai Municipality)</option><option value="Dohar Municipality">দোহার পৌরসভা (Dohar Municipality)</option><option value="Savar Municipality">সাভার পৌরসভা (Savar Municipality)</option>';
    }

    if (DisList == 'Faridpur') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Bhanga Municipality">ভাঙ্গা পৌরসভা (Bhanga Municipality)</option><option value="Boalmari Municipality">বোয়ালমারী পৌরসভা (Boalmari Municipality)</option><option value="Faridpur Municipality">ফরিদপুর পৌরসভা (Faridpur Municipality)</option><option value="Nagarkanda Municipality">নগরকান্দা পৌরসভা (Nagarkanda Municipality)</option>';
    }
    if (DisList == 'Gazipur') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Gazipur City Corporation">গাজীপুর সিটি কর্পোরেশন  (Gazipur City Corporation)</option><option value="Kaliganj Municipality">কালীগঞ্জ পৌরসভা (Kaliganj Municipality)</option><option value="Sreepur Municipality">শ্রীপুর পৌরসভা (Sreepur Municipality)</option><option value="Tongi Municipality">টঙ্গী পৌরসভা (Tongi Municipality)</option>';
    }
    if (DisList == 'Gopalganj') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Gopalganj Municipality">গোপালগঞ্জ পৌরসভা (Gopalganj Municipality)</option><option value="Kotalipara Municipality">কোটালীপাড়া  পৌরসভা (Kotalipara Municipality)</option><option value="Muksudpur Municipality">মুকসুদপুর পৌরসভা  (Muksudpur Municipality)</option><option value="Tungipara Municipality">টুংগীপাড়া পৌরসভা (Tungipara Municipality)</option>';
    }
    if (DisList == 'Kishoreganj') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Bajitpur Municipality">বাজিতপুর পৌরসভা (Bajitpur Municipality)</option><option value="Bhairab Municipality">ভৈরব পৌরসভা (Bhairab Municipality)</option><option value="Hossainpur Municipality">হোসেনপুর পৌরসভা (Hossainpur Municipality)</option><option value="Karimganj Municipality">করিমগঞ্জ পৌরসভা (Karimganj Municipality)</option><option value="Katiadi Municipality">কাটিয়াদী পৌরসভা (Katiadi Municipality)</option><option value="Kishoreganj Municipality">কিশোরগঞ্জ পৌরসভা (Kishoreganj Municipality)</option><option value="Kuliachar Municipality">কুলিয়ারচর পৌরসভা (Kuliachar Municipality)</option><option value="Pakundia Municipality">পাকুন্দিয়া পৌরসভা (Pakundia Municipality)</option>';
    }
    if (DisList == 'Madaripur') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Kalkini Municipality">কালকিনি পৌরসভা (Kalkini Municipality)</option><option value="Madaripur Municipality">মাদারীপুর পৌরসভা (Madaripur Municipality)</option><option value="Rajoir Municipality">রাজৈর পৌরসভা (Rajoir Municipality)</option><option value="Shibchar Municipality">শিবচর পৌরসভা (Shibchar Municipality)</option>';
    }
    if (DisList == 'Manikganj') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Manikganj Municipality">মানিকগঞ্জ পৌরসভা (Manikganj Municipality)</option><option value="Singair Municipality">সিঙ্গাইর (Singair Municipality)</option>'
    }
    if (DisList == 'Munshiganj') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Mirakadima Municipality">মীরকাদিম পৌরসভা (Mirakadima Municipality)</option><option value="Munshiganj Municipality">মুন্সিগঞ্জ পৌরসভা (Munshiganj Municipality)</option>'
    }
    if (DisList == 'Narayanganj') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Narayanganj City Corporation">নারায়নগঞ্জ সিটি কর্পোরেশন (Narayanganj City Corporation)</option><option value="Araihazar Municipality">আড়াইহাজার পৌরসভা (Araihazar Municipality) </option><option value="Gopaladi Municipality">গোপালদি পৌরসভা (Gopaladi Municipality)</option><option value="Kanchan Municipality">কাঞ্চন পৌরসভা (Kanchan Municipality)</option><option value="Sonargaon Municipality">সোনারগাঁ পৌরসভা (Sonargaon Municipality)</option><option value="Tarabo Municipality">তারাবো পৌরসভা (Tarabo Municipality)</option>'
    }
    if (DisList == 'Narsingdi') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Ghorashal Municipality">ঘোড়াশাল পৌরসভা (Ghorashal Municipality)</option><option value="Madhabdi Municipality">মাধবদী পৌরসভা (Madhabdi Municipality)</option><option value="Monohardi Municipality">মনোহরদী পৌরসভা (Monohardi Municipality)</option><option value="Narsingdi Municipality">নরসিংদী পৌরসভা (Narsingdi Municipality)</option><option value="Raipura Municipality">রায়পুরা পৌরসভা (Raipura Municipality)</option><option value="Shibpur Municipality">শিবপুর পৌরসভা (Shibpur Municipality)</option>'
    }
    if (DisList == 'Rajbari') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Goalanda Municipality">গোয়ালন্দ পৌরসভা (Goalanda Municipality)</option><option value="Pangsha Municipality">পাংশা পৌরসভা (Pangsha Municipality)</option><option value="Rajbari Municipality">রাজবাড়ী পৌরসভা (Rajbari Municipality)</option>'
    }
    if (DisList == 'Shariatpur') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Bhedarganj Municipality">ভেদরগঞ্জ পৌরসভা (Bhedarganj Municipality)</option><option value="Damudya Municipality">ডামুড্যা পৌরসভা (Damudya Municipality</option><option value="Gosairhat Municipality">গোসাইরহাট পৌরসভা (Gosairhat Municipality)</option><option value="Jazeera Municipality">জাজিরা পৌরসভা (Jazeera Municipality)</option><option value="Naria Municipality">নড়িয়া পৌরসভা (Naria Municipality)</option><option value="Shariatpur Municipality">শরীয়তপুর পৌরসভা (Shariatpur Municipality)</option>'
    }
    if (DisList == 'Tangail') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Basail Municipality">বাসাইল পৌরসভা (Basail Municipality)</option><option value="Bhuapur Municipality">ভুয়াপুর পৌরসভা (Bhuapur Municipality)</option><option value="Dhanbari Municipality">ধনবাড়ী পৌরসভা (Dhanbari Municipality)</option><option value="Elenga Municipality">এলেঙ্গা পৌরসভা (Elenga Municipality)</option><option value="Ghatail Municipality">ঘাটাইল পৌরসভা (Ghatail Municipality)</option><option value="Gopalpur Municipality">গোপালপুর পৌরসভা (Gopalpur Municipality)</option><option value="Kalihati Municipality">কালাহাতি পৌরসভা (Kalihati Municipality)</option><option value="Madhupur Municipality">মধুপুর পৌরসভা (Madhupur Municipality)</option><option value="Mirzapur Municipality">মির্জাপুর পৌরসভা (Mirzapur Municipality)</option><option value="Sakhipur Municipality">সখিপুর পৌরসভা (Sakhipur Municipality)</option><option value="Tangail Municipality">টাঙ্গাইল পৌরসভা (Tangail Municipality)</option>'
    }
    // Khulna Division
    if (DisList == 'Bagerhat') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Bagerhat Municipality">বাগেরহাট পৌরসভা (Bagerhat Municipality)</option><option value="Mongla Municipality">মংলা পৌরসভা (Mongla Municipality)</option><option value="Morrelganj Municipality">মোরেলগঞ্জ পৌরসভা (Morrelganj Municipality)</option>'
    }
    if (DisList == 'Chuadanga') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Alamdanga Municipality">আলমডাঙ্গা পৌরসভা (Alamdanga Municipality)</option><option value="Chuadanga Municipality">চুয়াডাঙ্গা পৌরসভা (Chuadanga Municipality)</option><option value="Darsana Municipality">দর্শনা পৌরসভা (Darsana Municipality)</option><option value="Jibannagar Municipality">জীবননগর পৌরসভা (Jibannagar Municipality)</option>'
    }
    if (DisList == 'Jashore') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Bagherpara Municipality">বাঘারপাড়া পৌরসভা (Bagherpara Municipality)</option><option value="Benapole Municipality">বেনাপোল পৌরসভা (Benapole Municipality)</option><option value="Chaugachha Municipality">চৌগাছা পৌরসভা (Chaugachha Municipality)</option><option value="Jashore Municipality">যশোর পৌরসভা (Jashore Municipality)</option><option value="Jhikargacha Municipality">ঝিকরগাছা পৌরসভা (Jhikargacha Municipality)</option><option value="Keshabpur Municipality">কেশবপুর পৌরসভা (Keshabpur Municipality)</option><option value="Manirampur Municipality">মণিরামপুর পৌরসভা (Manirampur Municipality)</option><option value="Noapara Municipality">নওয়াপাড়া পৌরসভা (Noapara Municipality)</option>'
    }
    if (DisList == 'Jhenaidah') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Jhenaidah Municipality">ঝিনাইদহ পৌরসভা (Jhenaidah Municipality)</option><option value="Kaliganj Municipality">কালীগঞ্জ পৌরসভা (Kaliganj Municipality)</option><option value="Kotchandpur Municipality">কোটচাঁদপুর পৌরসভা (Kotchandpur Municipality)</option><option value="Maheshpur Municipality">মহেশপুর পৌরসভা (Maheshpur Municipality)</option><option value="Shailkupa Municipality">শৈলকুপা পৌরসভা (Shailkupa Municipality)</option>'
    }
    if (DisList == 'Khulna') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Khulna City Corporation">খুলনা সিটি কর্পোরেশন (Khulna City Corporation)</option><option value="Dakop Municipality">দাকোপ পৌরসভা (Dakop Municipality)</option><option value="Paikgasa Municipality">পাইকগাছা পৌরসভা (Paikgasa Municipality)</option>'
    }
    if (DisList == 'Kustia') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Bheramara Municipality">ভেড়ামারা পৌরসভা (Bheramara Municipality)</option><option value="Khoksa Municipality">খোকসা পৌরসভা (Khoksa Municipality)</option><option value="Kumarkhali Municipality">কুমারখালী পৌরসভা (Kumarkhali Municipality)</option><option value="Kushtia Municipality">কুষ্টিয়া পৌরসভা (Kushtia Municipality)</option><option value="Mirpur Municipality">মিরপুর পৌরসভা (Mirpur Municipality)</option>'
    }
    if (DisList == 'Magura') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Magura Municipality">মাগুরা পৌরসভা (Magura Municipality)</option>'
    }
    if (DisList == 'Meherpur') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Gangni Municipality">গাংনী পৌরসভা (Gangni Municipality)</option><option value="Meherpur Municipality">মেহেরপুর পৌরসভা (Meherpur Municipality)</option>'
    }
    if (DisList == 'Narail') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Lohagara Municipality">লোহাগড়া পৌরসভা (Lohagara Municipality)</option><option value="Kalia Municipality">কালিয়া পৌরসভা (Kalia Municipality)</option><option value="Narail Municipality">নড়াইল পৌরসভা (Narail Municipality)</option>'
    }
    if (DisList == 'Satkhira') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Kalaroa Municipality">কলারোয়া পৌরসভা (Kalaroa Municipality)</option><option value="Satkhira Municipality">সাতক্ষীরা পৌরসভা (Satkhira Municipality)</option>'
    }

    //Mymensingh Division
    if (DisList == 'Mymensingh') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Mymensingh City Corporation">ময়মনসিংহ সিটি কর্পোরেশন (Mymensingh City Corporation)</option><option value="Bhaluka Municipality">ভালুকা পৌরসভা (Bhaluka Municipality)</option><option value="Fulbaria Municipality">ফুলবাড়ীয়া পৌরসভা (Fulbaria Municipality)</option><option value="Gafargaon Municipality">গফরগাঁও পৌরসভা (Gafargaon Municipality)</option><option value="Gauripur Municipality">গৌরীপুর পৌরসভা (Gauripur Municipality)</option><option value="Haluaghat Municipality">হালুয়াঘাট পৌরসভা (Haluaghat Municipality)</option><option value="Ishwarganj Municipality">ঈশ্বরগঞ্জ পৌরসভা (Ishwarganj Municipality)</option><option value="Muktagacha Municipality">মুক্তাগাছা পৌরসভা (Muktagacha Municipality)</option><option value="Nandail Municipality">নান্দাইল পৌরসভা (Nandail Municipality)</option><option value="Phulpur Municipality">ফুলপুর পৌরসভা (Phulpur Municipality)</option><option value="Trishal Municipality">ত্রিশাল পৌরসভা (Trishal Municipality)</option>'
    }
    if (DisList == 'Netrokona') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Durgapur Municipality">দূর্গাপুর পৌরসভা (Durgapur Municipality)</option><option value="Kendua Municipality">কেন্দুয়া পৌরসভা (Kendua Municipality)</option><option value="Madan Municipality">মদন পৌরসভা (Madan Municipality)</option><option value="Mohanganj Municipality">মোহনগঞ্জ পৌরসভা (Mohanganj Municipality)</option><option value="Netrokona  Municipality">নেত্রকোণা পৌরসভা (Netrokona  Municipality)</option>'
    }
    if (DisList == 'Jamalpur') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Bakshiganj Municipality">বকশীগঞ্জ পৌরসভা (Bakshiganj Municipality)</option><option value="Dewanganj Municipality">দেওয়ানগঞ্জ পৌরসভা (Dewanganj Municipality)</option><option value="Hazrabari Municipality">হাজরাবাড়ী পৌরসভা (Hazrabari Municipality)</option><option value="Islampur Municipality">ইসলামপুর পৌরসভা (Islampur Municipality)</option><option value="Jamalpur Municipality">জামালপুর পৌরসভা (Jamalpur Municipality)</option><option value="Madarganj  Municipality">মাদারগঞ্জ পৌরসভা (Madarganj  Municipality)</option><option value="Melandaha  Municipality">মেলান্দহ পৌরসভা (Melandaha  Municipality)</option><option value="Sharishabari  Municipality">সরিষাবাড়ী পৌরসভা (Sharishabari  Municipality)</option>'
    }
    if (DisList == 'Sherpur') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Nalitabari Municipality">নালিতাবাড়ি পৌরসভা (Nalitabari Municipality)</option><option value="Nakla Municipality">নকলা পৌরসভা (Nakla Municipality)</option><option value="Sherpur Municipality">শেরপুর পৌরসভা (Sherpur Municipality)</option><option value="Sreebardi Municipality">শ্রীবর্দী পৌরসভা (Sreebardi Municipality)</option>'
    }

    //Rajshahi Division

    if (DisList == 'Bagura') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Bagura Municipality">বগুড়া পৌরসভা (Bagura Municipality)</option><option value="Dhunat Municipality">ধুনট পৌরসভা (Dhunat Municipality)</option><option value="Dhupchanchia Municipality">দুপচাচিয়া পৌরসভা (Dhupchanchia Municipality)</option><option value="Gabtali Municipality">গাবতলী পৌরসভা (Gabtali Municipality)</option><option value="Kahaloo Municipality">কাহালু পৌরসভা (Kahaloo Municipality)</option><option value="Nandigram Municipality">নন্দিগ্রাম পৌরসভা (Nandigram Municipality)</option><option value="Santahar Municipality">সান্তাহার পৌরসভা (Santahar Municipality)</option><option value="Sariakandi Municipality">সারিয়াকান্দি পৌরসভা (Sariakandi Municipality)</option><option value="Sherpur Municipality">শেরপুর পৌরসভা (Sherpur Municipality)</option><option value="Shibganj Municipality">শিবগঞ্জ পৌরসভা (Shibganj Municipality)</option><option value="Sonatola Municipality">সোনাতলা পৌরসভা (Sonatola Municipality)</option><option value="Talora Municipality">তালোড়া পৌরসভা (Talora Municipality)</option>'
    }
    if (DisList == 'Chapainawabganj') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Chapainawabganj Municipality">চাঁপাইনবাবগঞ্জ পৌরসভা (Chapainawabganj Municipality)</option><option value="Nachol Municipality">নাচোল পৌরসভা (Nachol Municipality)</option><option value="Shibganj Municipality">শিবগঞ্জ পৌরসভা (Shibganj Municipality)</option><option value="Rohanpur Municipality">রহনপুর পৌরসভা (Rohanpur Municipality)</option>'
    }
    if (DisList == 'Joypurhat') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Akkelpur Municipality">আক্কেলপুর পৌরসভা (Akkelpur Municipality)</option><option value="Joypurhat Municipality">জয়পুরহাট পৌরসভা (Joypurhat Municipality)</option><option value="Kalai Municipality">কালাই পৌরসভা (Kalai Municipality)</option><option value="Khetlal Municipality">খেতলাল পৌরসভা (Khetlal Municipality)</option><option value="Panchbibi Municipality">পাঁচবিবি পৌরসভা (Panchbibi Municipality)</option>'
    }
    if (DisList == 'Naogaon') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Dhamoirhat Municipality">ধামইরহাট পৌরসভা (Dhamoirhat Municipality)</option><option value="Naogaon Municipality">নওগাঁ পৌরসভা (Naogaon Municipality)</option><option value="Nazipur Municipality">নজিপুর পৌরসভা (Nazipur Municipality)</option>'
    }
    if (DisList == 'Natore') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Bagatipara Municipality">বাগাতিপাড়া পৌরসভা (Bagatipara Municipality)</option><option value="Banpara Municipality">বনপাড়া পৌরসভা (Banpara Municipality)</option><option value="Baraigram Municipality">বড়াইগ্রাম পৌরসভা (Baraigram Municipality)</option><option value="Gopalpur Municipality">গোপালপুর পৌরসভা (Gopalpur Municipality)</option><option value="Gurudaspur Municipality">গুরুদাসপুর পৌরসভা (Gurudaspur Municipality)</option><option value="Natore Municipality">নাটোর পৌরসভা (Natore Municipality)</option><option value="Naldanga Municipality">নলডাঙ্গা পৌরসভা (Naldanga Municipality)</option><option value="Singra Municipality">সিংড়া পৌরসভা (Singra Municipality)</option>'
    }
    if (DisList == 'Pabna') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Atgharia Municipality">আটঘরিয়া পৌরসভা (Atgharia Municipality)</option><option value="Bera Municipality">বেড়া পৌরসভা (Bera Municipality)</option><option value="Bhangura Municipality">ভাঙ্গুরা পৌরসভা (Bhangura Municipality)</option><option value="Chatmohar Municipality">চাটমোহর পৌরসভা (Chatmohar Municipality)</option><option value="Faridpur Municipality">ফরিদপুর পৌরসভা (Faridpur Municipality)</option><option value="Ishwardi Municipality">ঈশ্বরদী পৌরসভা (Ishwardi Municipality)</option><option value="Pabna Municipality">পাবনা পৌরসভা (Pabna Municipality)</option><option value="Santhia Municipality">সাঁথিয়া পৌরসভা (Santhia Municipality)</option><option value="Suzanagar Municipality">সুজানগর পৌরসভা (Suzanagar Municipality)</option>'
    }
    if (DisList == 'Rajshahi') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Rajshahi City Corporation">রাজশাহী সিটি কর্পোরেশন (Rajshahi City Corporation)</option><option value="Arani Municipality">আড়ানি পৌরসভা (Arani Municipality)</option><option value="Bagha Municipality">বাঘা পৌরসভা (Bagha Municipality)</option><option value="Bhabaniganj Municipality">ভবানীগঞ্জ পৌরসভা (Bhabaniganj Municipality)</option><option value="Charghat Municipality">চারঘাট পৌরসভা (Charghat Municipality)</option><option value="Durgapur Municipality">দুর্গাপুর পৌরসভা (Durgapur Municipality)</option><option value="Godagari Municipality">গোদাগাড়ি পৌরসভা (Godagari Municipality)</option><option value="Kakonhat Municipality">কাকন হাট পৌরসভা (Kakonhat Municipality)</option><option value="Katakhali Municipality">কাটাখালী পৌরসভা (Katakhali Municipality)</option><option value="Keshorehat Municipality">কেশরহাট পৌরসভা (Keshorehat Municipality)</option><option value="Mondumala Municipality">মুণ্ডুমালা পৌরসভা (Mondumala Municipality)</option><option value="Naohata Municipality">নওহাটা পৌরসভা (Naohata Municipality)</option><option value="Puthia Municipality">পুঠিয়া পৌরসভা (Puthia Municipality)</option><option value="Taherpur Municipality">তাহেরপুর পৌরসভা (Taherpur Municipality)</option><option value="Tanore Municipality">তানোর পৌরসভা (Tanore Municipality)</option>'
    }
    if (DisList == 'Sirajganj') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Belkuchi Municipality">বেলকুচি পৌরসভা (Belkuchi Municipality)</option><option value="Kazipur Municipality">কাজীপুর পৌরসভা (Kazipur Municipality)</option><option value="Raiganj Municipality">রায়গঞ্জ পৌরসভা (Raiganj Municipality)</option><option value="Shahjadpur Municipality">শাহজাদপুর পৌরসভা (Shahjadpur Municipality)</option><option value="Sirajganj Municipality">সিরাজগঞ্জ পৌরসভা (Sirajganj Municipality)</option><option value="Tarash Municipality">তাড়াশ পৌরসভা (Tarash Municipality)</option><option value="Ullapara Municipality">উল্লাপাড়া পৌরসভা (Ullapara Municipality)</option>'
    }

    //Rangpur Division

    if (DisList == 'Dinajpur') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Biral Municipality">বিরল পৌরসভা (Biral Municipality)</option><option value="Birampur Municipality">বিরামপুর পৌরসভা (Birampur Municipality)</option><option value="Birganj Municipality">বীরগঞ্জ পৌরসভা (Birganj Municipality)</option><option value="Dinajpur Municipality">দিনাজপুর পৌরসভা (Dinajpur Municipality)</option><option value="Ghoraghat Municipality">ঘোড়াঘাট পৌরসভা (Ghoraghat Municipality)</option><option value="Hakimpur Municipality">হাকিমপুর পৌরসভা (Hakimpur Municipality)</option><option value="Parbatipur Municipality">পার্বতীপুর পৌরসভা (Parbatipur Municipality)</option><option value="Phulbari Municipality">ফুলবাড়ী পৌরসভা (Phulbari Municipality)</option><option value="Setabganj Municipality">সেতাবগন্জ পৌরসভা (Setabganj Municipality)</option>'
    }
    if (DisList == 'Gaibandha') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Gaibandha Municipality">গাইবান্ধা পৌরসভা (Gaibandha Municipality)</option><option value="Gobindaganj Municipality">গোবিন্দগঞ্জ পৌরসভা (Gobindaganj Municipality)</option><option value="Palashbari Municipality">পলাশবাড়ী পৌরসভা (Palashbari Municipality)</option><option value="Sundarganj Municipality">সুন্দরগঞ্জ পৌরসভা (Sundarganj Municipality)</option>'
    }
    if (DisList == 'Kurigram') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Kurigram Municipality">কুড়িগ্রাম পৌরসভা (Kurigram Municipality)</option><option value="Nageswari Municipality">নাগেশ্বরী পৌরসভা (Nageswari Municipality)</option><option value="Ulipur Municipality">উলিপুর পৌরসভা (Ulipur Municipality)</option>'
    }
    if (DisList == 'Lalmonirhat') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Lalmonirhat Municipality">লালমনিরহাট পৌরসভা (Lalmonirhat Municipality)</option><option value="Patgram Municipality">পাটগ্রাম পৌরসভা (Patgram Municipality)</option>'
    }
    if (DisList == 'Nilphamari') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Domar Municipality">ডোমার  পৌরসভা (Domar Municipality)</option><option value="Jaldhaka Municipality">জলঢাকা পৌরসভা (Jaldhaka Municipality)</option><option value="Nilphamari Municipality">নীলফামারী পৌরসভা (Nilphamari Municipality)</option><option value="Saidpur Municipality">সৈয়দপুর পৌরসভা (Saidpur Municipality)</option>'
    }
    if (DisList == 'Panchagarh') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Boda Municipality">বোদা পৌরসভা (Boda Municipality)</option><option value="Debiganj Municipality">দেবীগঞ্জ পৌরসভা (Debiganj Municipality)</option><option value="Panchagarh Municipality">পঞ্চগড় পৌরসভা (Panchagarh Municipality)</option>'
    }
    if (DisList == 'Rangpur') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Rangpur City Corporation">রংপুর সিটি কর্পোরেশন (Rangpur City Corporation)</option><option value="Badarganj Municipality">বদরগঞ্জ পৌরসভা (Badarganj Municipality)</option><option value="Haragachh Municipality">হারাগাছ পৌরসভা (Haragachh Municipality)</option><option value="Pirganj Municipality">পীরগঞ্জ পৌরসভা (Pirganj Municipality)</option>'
    }
    if (DisList == 'Thakurgaon') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Pirganj Municipality">পীরগঞ্জ পৌরসভা (Pirganj Municipality)</option><option value="Ranisankail Municipality">রাণীশংকৈল পৌরসভা (Ranisankail Municipality)</option><option value="Thakurgaon Municipality">ঠাকুরগাঁও পৌরসভা (Thakurgaon Municipality)</option>'
    }

    //Sylhet Division
    if (DisList == 'Habiganj') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Azmiriganj Municipality">আজমিরীগঞ্জ পৌরসভা (Azmiriganj Municipality)</option><option value="Chunarughat Municipality">চুনারুঘাট পৌরসভা (Chunarughat Municipality)</option><option value="Habiganj Municipality">হবিগঞ্জ পৌরসভা (Habiganj Municipality)</option><option value="Madhabpur Municipality">মাধবপুর পৌরসভা (Madhabpur Municipality)</option><option value="Nabiganj Municipality">নবীগঞ্জ পৌরসভা (Nabiganj Municipality)</option><option value="Shayestaganj Municipality">শায়েস্তাগঞ্জ পৌরসভা (Shayestaganj Municipality)</option>'
    }
    if (DisList == 'Moulvibazar') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Barlekha Municipality">বড়লেখা পৌরসভা (Barlekha Municipality)</option><option value="Kamalganj Municipality">কমলগঞ্জ পৌরসভা (Kamalganj Municipality)</option><option value="Kulaura Municipality">কুলাউড়া পৌরসভা (Kulaura Municipality)</option><option value="Moulvibazar Municipality">মৌলভীবাজার পৌরসভা (Moulvibazar Municipality)</option><option value="Sreemongal Municipality">শ্রীমঙ্গল পৌরসভা (Sreemongal Municipality)</option>'
    }
    if (DisList == 'Sunamganj') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Chhatak Municipality">ছাতক পৌরসভা (Chhatak Municipality)</option><option value="Derai Municipality">দিরাই পৌরসভা (Derai Municipality)</option><option value="Jagannathpur Municipality">জগন্নাথপুর পৌরসভা (Jagannathpur Municipality)</option><option value="Sunamganj Municipality">সুনামগঞ্জ পৌরসভা (Sunamganj Municipality)</option>'
    }
    if (DisList == 'Sylhet') {
        var adminList = '<option disabled selected>Select Administration</option><option value="Sylhet City Corporation">সিলেট সিটি কর্পোরেশন (Sylhet City Corporation)</option><option value="Beanibazar Municipality">বিয়ানিবাজার পৌরসভা (Beanibazar Municipality)</option><option value="Golapganj Municipality">গোলাপগঞ্জ পৌরসভা (Golapganj Municipality)</option><option value="Kanaighat Municipality">কানাইঘাট পৌরসভা (Kanaighat Municipality)</option><option value="Zakiganj Municipality">জকিগঞ্জ পৌরসভা (Zakiganj Municipality)</option>'
    }
    document.getElementById("administration").innerHTML = adminList;
}
// Upazila Section select
function upazilaList() {
    var DisList = document.getElementById('district').value;

    //Barishal Division

    if (DisList == 'Barguna') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Amtali">আমতলী (Amtali)</option><option value="Bamna">বামনা (Bamna)</option><option value="Barguna Sadar">বরগুনা সদর (Barguna Sadar)</option><option value="Betagi">বেতাগী (Betagi)</option><option value="Patharghata">পাথরঘাটা (Patharghata)</option><option value="Taltali">তালতলী (Taltali)</option>'
    }
    if (DisList == 'Barishal') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Agailjhara">আগৈলঝাড়া (Agailjhara)</option><option value="Babuganj">বাবুগঞ্জ (Babuganj)</option><option value="Bakerganj">বাকেরগঞ্জ  (Bakerganj)</option><option value="Banaripara">বানারীপাড়া (Banaripara)</option><option value="Barishal Sadar">বরিশাল সদর (Barishal Sadar)</option><option value="Gournadi">গৌড়নদী (Gournadi)</option><option value="Hijla">হিজলা (Hijla)</option><option value="Mehendiganj">মেহেন্দিগঞ্জ (Mehendiganj)</option><option value="Muladi">মুলাদী (Muladi)</option><option value="Wazirpur">উজিরপুর (Wazirpur)</option>'
    }
    if (DisList == 'Bhola') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Bhola Sadar">ভোলা সদর (Bhola Sadar)</option><option value="Burhanuddin">বোরহান উদ্দিন (Burhanuddin)</option><option value="Char Fasson">চরফ্যাশন (Char Fasson)</option><option value="Daulatkhan">দৌলতখান (Daulatkhan)</option><option value="Lalmohan">লালমোহন (Lalmohan)</option><option value="Manpura">মনপুরা (Manpura)</option><option value="Tazumuddin">তজুমদ্দিন (Tazumuddin)</option>'
    }
    if (DisList == 'Jhalokati') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Jhalokati Sadar">ঝালকাঁঠি  সদর(Jhalokati Sadar)</option><option value="Kathalia">কাঠালিয়া (Kathalia)</option><option value="Nalchity">নলছিটি (Nalchity)</option><option value="Rajapur">রাজাপুর (Rajapur)</option>'
    }
    if (DisList == 'Patuakhali') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Dumki">দুমকি (Dumki)</option><option value="Patuakhali Sadar">পটুয়াখালী সদর (Patuakhali Sadar)</option><option value="Mirzaganj">মির্জাগঞ্জ (Mirzaganj)</option><option value="Bauphal">বাউফল (Bauphal)</option><option value="Galachipa">গলাচিপা (Galachipa)</option><option value="Dashmina">দশমিনা (Dashmina)</option><option value="Rangabali">রাঙ্গাবালী (Rangabali)</option><option value="Kolapara">কলাপাড়া (Kolapara)</option>'
    }
    if (DisList == 'Pirojpur') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Bhandaria">ভান্ডারিয়া (Bhandaria)</option><option value="Kawkhali">কাউখালী (Kawkhali)</option><option value="Mathbaria">মঠবাড়ীয়া (Mathbaria)</option><option value="Nazirpur">নাজিরপুর (Nazirpur)</option><option value="Nesarabad">নেছারাবাদ (Nesarabad)</option><option value="Pirojpur Sadar">পিরোজপুর সদর (Pirojpur Sadar)</option><option value="Indurkani">ইন্দুরকানী (Indurkani)</option>'
    }

    //Chittagong Division
    if (DisList == 'Bandarban') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Ali Kadam">আলীকদম (Ali Kadam)</option><option value="Bandarban Sadar">বান্দরবান সদর (Bandarban Sadar)<option value="Lama">লামা (Lama)</option></option><option value="Naikhongchhari">নাইক্ষ্যাংছড়ি (Naikhongchhari)</option><option value="Rowangchhari">রোয়াংছড়ি (Rowangchhari)</option><option value="Ruma">রুমা (Ruma)</option><option value="Thanchi">থানচি (Thanchi)</option>'
    }
    if (DisList == 'Brahmanbaria') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Brahmanbaria Sadar">ব্রাহ্মণবাড়িয়া সদর (Brahmanbaria Sadar)</option><option value="Kasba">কসবা (Kasba)</option><option value="Akhaura">আখাউড়া (Akhaura)</option><option value="Ashuganj">আশুগঞ্জ (Ashuganj)</option><option value="Bancharampur">বাঞ্ছারামপুর (Bancharampur)</option><option value="Bijoynagar">বিজয়নগর (Bijoynagar)</option><option value="Nasirnagar">নাসিরনগর (Nasirnagar)</option><option value="Nabinagar">নবীনগর (Nabinagar)</option><option value="Sarail">সরাইল (Sarail)</option>'
    }
    if (DisList == 'Chandpur') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Chandpur Sadar">চাঁদপুর সদর (Chandpur Sadar)</option><option value="Faridganj">ফরিদগঞ্জ (Faridganj)</option><option value="Haimchar">হাইমচর (Haimchar)</option><option value="Kachua">কচুয়া (Kachua)</option><option value="Matlab Dakshin">মতলব দক্ষিণ(Matlab Dakshin)</option><option value="Matlab Uttar">মতলব উত্তর (Matlab Uttar)</option><option value="Shahrasti">শহরাস্তি (Shahrasti)</option>'
    }
    if (DisList == 'Chattogram') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Akbarshah">আকবরশাহ (Akbarshah)</option><option value="Anwara">আনোয়ারা (Anwara)</option><option value="Bakoliya">বাকলিয়া (Bakoliya)</option><option value="Bandar">বন্দর (Bandar)</option><option value="Banshkhali">বাশঁখালী (Banshkhali)</option><option value="Boalkhali">বোয়ালখালী (Boalkhali)</option><option value="Bayazid">বায়েজিদ (Bayazid)</option><option value="Chandgaon">চান্দগাঁও (Chandgaon)</option><option value="Chandanaish">চন্দনাইশ (Chandanaish)</option><option value="Double Mooring">ডবলমুরিং (Double Mooring)</option><option value="Fatikchhari">ফটিকছড়ি (Fatikchhari)</option><option value="Halishahar">হালিশহর (Halishahar)</option><option value="Hathazari">হাটহাজারী (Hathazari)</option><option value="Karnaphuli">কর্ণফুলী (Karnaphuli)</option><option value="Khulshi">খুলশী (Khulshi)</option><option value="Kotwali">কোতোয়ালী (Kotwali)</option><option value="Lohagara">লোহাগাড়া (Lohagara)</option><option value="Mirsharai">মীরসরাই (Mirsharai)</option><option value="Panchlaish">পাঁচলাইশ (Panchlaish)</option><option value="Pahartali">পাহাড়তলী (Pahartali)</option><option value="Patenga">পতেঙ্গা (Patenga)</option><option value="Patiya">পাটিয়া (Patiya)</option><option value="Rangunia">রাঙ্গুনিয়া (Rangunia)</option><option value="Raozan">রাউজান (Raozan)</option><option value="Sandwip">সন্দ্বীপ (Sandwip)</option><option value="Satkania">সাতকানিয়া (Satkania)</option><option value="Sitakunda">শীতাকুন্ড (Sitakunda)</option>'
    }
    if (DisList == 'Cumilla') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Barura">বরুড়া (Barura)</option><option value="Brahmanpara">ব্রাহ্মণপাড়া (Brahmanpara)</option><option value="Burichong">বুড়িচং (Burichong)</option><option value="Comilla Sadar">কুমিল্লা সদর (Comilla Sadar)</option><option value="Comilla Sadar Dakshin">কুমিল্লা সদর দক্ষিণ (Comilla Sadar Dakshin)</option><option value="Chandina">চান্দিনা (Chandina)</option><option value="Chauddagram">চৌদ্দগ্রাম (Chauddagram)</option><option value="Daudkandi">দাউদকান্দি (Daudkandi)</option><option value="Debidwar">দেবিদ্বার (Debidwar)</option><option value="Homna">হোমনা (Homna)</option><option value="Laksam">লাকসাম (Laksam)</option><option value="Lalmai">লালমাই (Lalmai)</option><option value="Monohorganj">মনোহরগঞ্জ (Monohorganj)</option><option value="Meghna">মেঘনা (Meghna)</option><option value="Muradnagar">মুরাদনগর (Muradnagar)</option><option value="Nangalkot">নাঙ্গলকোট (Nangalkot)</option><option value="Titas">তিতাস (Titas)</option>'
    }
    if (DisList == 'Cox\'s Bazar') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Chakaria">চকরিয়া (Chakaria)</option><option value="Cox\'s Bazar">কক্সবাজার (Cox\'s Bazar)</option><option value="Kutubdia">কুতুবদিয়া (Kutubdia)</option><option value="Maheshkhali">মহেশখালী (Maheshkhali)</option><option value="Ramu">রামু (Ramu)</option><option value="Ukhia">উখিয়া (Ukhia)</option><option value="Pekua">পেকুয়া (Pekua)</option><option value="Eidgaon">ঈদগাঁও (Eidgaon)</option>'
    }
    if (DisList == 'Feni') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Chhagalnaiya">ছাগলনাইয়া (Chhagalnaiya)</option><option value="Daganbhuiyan">দাগনভূইয়া (Daganbhuiyan)</option><option value="Feni Sadar">ফেনী সদর (Feni Sadar)</option><option value="Fulgazi">ফুলগাজী (Fulgazi)</option><option value="Parshuram">পরশুরাম (Parshuram)</option><option value="Sonagazi">সোনাগাজী (Sonagazi)</option>'
    }
    if (DisList == 'Khagrachhari') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Dighinala">দীঘিনালা (Dighinala)</option><option value="Khagrachhari Sadar">খাগড়াছড়ি সদর (Khagrachhari Sadar)</option><option value="Lakshmichhari">লক্ষীছড়ি (Lakshmichhari)</option><option value="Mahalchhari">মহালছড়ি (Mahalchhari)</option><option value="Manikchhari">মানিকছড়ি (Manikchhari)</option><option value="Matiranga">মাটিরাঙ্গা (Matiranga)</option><option value="Panchhari">পানছড়ি (Panchhari)</option><option value="Ramgarh">রামগড় (Ramgarh)</option><option value="Guimara">গুইমারা (Guimara)</option>'
    }
    if (DisList == 'Lakshmipur') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Kamalnagar">কমলনগর (Kamalnagar)</option><option value="Lakshmipur">লক্ষ্মীপুর (Lakshmipur)</option><option value="Raipur">রায়পুর (Raipur)</option><option value="Ramganj">রামগঞ্জ (Ramganj)</option><option value="Ramgoti">রামগতি (Ramgoti)</option>';
    }
    if (DisList == 'Noakhali') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Begumganj">বেগমগঞ্জ (Begumganj)</option><option value="Bhashanchar">ভাসানচর (Bhashanchar)</option><option value="Chatkhil">চাটখিল (Chatkhil)</option><option value="Companiganj">কোম্পানিগঞ্জ (Companiganj)</option><option value="Hatia">হাতিয়া (Hatia)</option><option value="Kabirhat">কবিরহাট (Kabirhat)</option><option value="Noakhali Sadar">নোয়াখালী সদর (Noakhali Sadar)</option><option value="Senbagh">সেনবাগ (Senbagh)</option><option value="Sonaimuri">সোনাইমুড়ী (Sonaimuri)</option><option value="Subornochar">সুবুর্ণচর (Subornochar)</option>';
    }
    if (DisList == 'Rangamati') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Bagaichhari">বাঘাইছড়ি (Bagaichhari)</option><option value="Belaichhari">বিলাইছড়ি (Belaichhari)</option><option value="Barkal">বরকল (Barkal)</option><option value="Juraichhari">জুরাছড়ি (Juraichhari)</option><option value="Kaptai">কাপ্তাই (Kaptai)</option><option value="Kaukhali">কাউখালী (Kaukhali)</option><option value="Langadu">লংগদু (Langadu)</option><option value="Naniarchar">নানিয়ারচর (Naniarchar)</option><option value="Rajasthali">রাজস্থলী (Ranjasthali)</option><option value="Rangamati Sadar">রাঙ্গামাটি সদর (Rangamati Sadar)</option>';
    }

    //Dhaka Division
    if (DisList == 'Dhaka') {
        var upazilaList = '<option disabled selected>Select Upazila</option><optgroup label="Dhaka-North"><option value="Adabor">আদাবর (Adabor)</option><option value="Badda">বাড্ডা (Badda)</option><option value="Banani">বনানী Banani</option><option value="Gulshan">গুলশান (Gulshan)</option><option value="Bhashantek">ভাসানটেক (Bhashantek)</option><option value="Bimanbandar">বিমানবন্দর (Bimanbandar)</option><option value="Cantonment">ক্যান্টনমেন্ট (Cantonment)</option><option value="Darussalam">দারুসসালাম (Darussalam)</option><option value="Hatirjheel">হাতিরঝিল (Hatirjheel)</option><option value="Kafrul">কাফরুল (Kafrul)</option><option value="Khilkhet">খিলক্ষেত (Khilkhet)</option><option value="Mirpur">মিরপুর (Mirpur)</option><option value="Mohammadpur">মোহাম্মদপুর (Mohammadpur)</option><option value="Pallabi">পল্লবী (Pallabi)</option><option value="Rampura">রামপুরা (Rampura)</option><option value="Rupnagar">রূপনগর (Rupnagar)</option><option value="Shah Ali">শাহ আলী (Shah Ali)</option><option value="Sher-E-Bangla Nagar">শের-এ-বাংলা নগর (Sher-E-Bangla Nagar)</option><option value="Shilpanchal">শিল্পাঞ্চল (Shilpanchal)</option><option value="Tejgaon">তেজগাও (Tejgaon)</option><option value="Turag">তুরাগ (Turag)</option><option value="Uttara-East">উত্তরা পূর্ব (Uttara-East)</option><option value="Uttara-West">উত্তরা পশ্চিম (Uttara-West)</option><option value="Uttarkhan">উত্তরখান (Uttarkhan)</option><option value="Vatara">ভাটারা (Vatara)</option><optgroup label="Dhaka-South"><option value="Bangshal">বংশাল (Bangshal)</option><option value="Chawkbazar">চকবাজার (Chawkbazar)</option><option value="Demra">ডেমরা (Demra)</option><option value="Dhanmondi">ধানমন্ডি (Dhanmondi)</option><option value="Gandaria">গেন্ডারিয়া (Gandaria)</option><option value="Hazaribagh">হাজারীবাগ (Hazaribagh)</option><option value="Jatrabari">যাত্রাবাড়ী (Jatrabari)</option><option value="Kadamtali">কদমতলী (Kadamtali)</option><option value="Kalabagan">কলাবাগান (Kalabagan)</option><option value="Khilgaon">খিলগাঁও (Khilgaon)</option><option value="Kotwali">কোতোয়ালী (Kotwali)</option><option value="Lalbagh">লালবাগ (Lalbagh)</option><option value="Motijheel">মতিঝিল (Motijheel)</option><option value="Mugda">মুগদা (Mugda)</option><option value="Paltan">পল্টন (Paltan)</option><option value="Ramna">রমনা (Ramna)</option><option value="Sabujbagh">সবুজবাগ (Sabujbagh)</option><option value="Shahbag">শাহাবাগ (Shahbag)</option><option value="Shahjahanpur">শাহাজাহানপুর (Shahjahanpur)</option><option value="Shampur">শ্যামপুর (Shampur)</option><option value="Sutrapur">সুত্রাপুর (Sutrapur)</option><option value="Wari">ওয়ারী (Wari)</option><optgroup label="Others"><option value="Dhamrai">ধামরাই (Dhamrai)</option><option value="Dohar">দোহার (Dohar)</option><option value="Keraniganj">কেরাণীগঞ্জ (Keraniganj)</option><option value="Nawabganj">নবাবগঞ্জ (Nawabganj)</option><option value="Savar">সাভার (Savar)</option>';
    }
    if (DisList == 'Faridpur') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Alfadanga">আলফাডাঙ্গা (Alfadanga)</option><option value="Bhanga">ভাঙ্গা (Bhanga)</option><option value="Boalmari">বোয়ালমারী (Boalmari)</option><option value="Charbhadrasan">চরভদ্রসন (Charbhadrasan)</option><option value="Faridpur Sadar">ফরিদপুর সদর (Faridpur Sadar)</option><option value="Madhukhali">মধুখালী (Madhukhali)</option><option value="Nagarkanda">নগরকান্দা (Nagarkanda)</option><option value="Sadarpur">সদরপুর (Sadarpur)</option><option value="Saltha">সালথা (Saltha)</option>';
    }
    if (DisList == 'Gazipur') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Gazipur Sadar">গাজীপুর সদর (Gazipur Sadar)</option><option value="Kaliakair">কালিয়াকৈর (Kaliakair)</option><option value="Kaliganj">কালীগঞ্জ (Kaliganj)</option><option value="Kapasia">কাপাসিয়া (Kapasia)</option><option value="Sreepur">শ্রীপুর (Sreepur)</option>';
    }
    if (DisList == 'Gopalganj') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Gopalganj Sadar">গোপালগঞ্জ সদর (Gopalganj Sadar)</option><option value="Kashiani">কাশিয়ানী (Kashiani)</option><option value="Kotalipara">কোটালীপাড়া (Kotalipara)</option><option value="Muksudpur">মুকসুদপুর (Muksudpur)</option><option value="Tungipara">টুংগীপাড়া (Tungipara)</option>';
    }
    if (DisList == 'Kishoreganj') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Austagram">অষ্টগ্রাম (Austagram)</option><option value="Bajitpur">বাজিতপুর (Bajitpur)</option><option value="Bhairab">ভৈরব (Bhairab)</option><option value="Hossainpur">হোসেনপুর (Hossainpur)</option><option value="Itna">ইটনা (Itna)</option><option value="Karimganj">করিমগঞ্জ (Karimganj)</option><option value="Katiadi">কাটিয়াদী (Katiadi)</option><option value="Kishoreganj Sadar">কিশোরগঞ্জ সদর (Kishoreganj Sadar)</option><option value="Kuliarchar">কুলিয়ারচর (Kuliarchar)</option><option value="Mithamain">মিঠামইন (Mithamain)</option><option value="Nikili">নিকলী (Nikili)</option><option value="Pakundia">পাকুন্দিয়া (Pakundia)</option><option value="Tarail">তাড়াইল (Tarail)</option>';
    }
    if (DisList == 'Madaripur') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Dasar">ডাসার (Dasar)</option><option value="Kalkini">কালকিনি (Kalkini)</option><option value="Madaripur Sadar">মাদারীপুর সদর (Madaripur Sadar)</option><option value="Rajoir">রাজৈর (Rajoir)</option><option value="Shibchar">শিবচর (Shibchar)</option>';
    }
    if (DisList == 'Manikganj') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Daulatpur">দৌলতপুর (Daulatpur)</option><option value="Ghior">ঘিওর (Ghior)</option><option value="Harirampur">হরিরামপুর (Harirampur)</option><option value="Manikganj Sadar">মানিকগঞ্জ সদর (Manikganj Sadar)</option><option value="Sarutia">সাটুরিয়া (Sarutia)</option><option value="Shivalaya">শিবালয় (Shivalaya)</option><option value="Singair">সিংগাইর (Singair)</option>';
    }
    if (DisList == 'Munshiganj') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Gazaria">গজারিয়া (Gazaria)</option><option value="Lohajang">লৌহজং (Lohajang)</option><option value="Munshiganj Sadar">মুন্সিগঞ্জ সদর (Munshiganj Sadar)</option><option value="Sirajdikhan">সিরাজদিখান (Sirajdikhan)</option><option value="Sreenagar">শ্রীনগর (Sreenagar)</option><option value="Tongibari">টংগীবাড়ী (Tongibari)</option>';
    }
    if (DisList == 'Narayanganj') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Araihazar">আড়াইহাজার (Araihazar)</option><option value="Baidder Bazar">বৈদ্যের বাজার (Baidder Bazar)</option><option value="Bandar">বন্দর (Bandar)</option><option value="Fatullah">ফতুল্লা (Fatullah)</option><option value="Narayanganj Sadar">নারায়নগঞ্জ  সদর (Narayanganj Sadar)</option><option value="Rupganj">রূপগঞ্জ (Rupganj)</option><option value="Siddhirganj">সিদ্দিরগঞ্জ (Siddhirganj)</option><option value="Sonargaon">সোনারগাঁও (Sonargaon)</option>';
    }
    if (DisList == 'Narsingdi') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Belabo">বেলাবো (Belabo)</option><option value="Monohardi">মনোহরদি (Monohardi)</option><option value="Narsingdi Sadar">নরসিংদী সদর (Narsingdi Sadar)</option><option value="Palash">পলাশ (Palash)</option><option value="Raipura">রাইপুরা (Raipura)</option><option value="Shibpur">শিবপুর (Shibpur)</option>';
    }
    if (DisList == 'Rajbari') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Baliakandi">বালিয়াকান্দি (Baliakandi)</option><option value="Goalanda">গোয়ালন্দ (Goalanda)</option><option value="Kalukhali">কালুখালী (Kalukhali)</option><option value="Pangsha">পাংশা (Pangsha)</option><option value="Rajbari Sadar">রাজবাড়ী সদর (Rajbari Sadar)</option>';
    }
    if (DisList == 'Shariatpur') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Bhedarganj">ভেদরগঞ্জ (Bhedarganj)</option><option value="Damudya">ডামুড্যা (Damudya)</option><option value="Gosairhat">গোসাইরহাট (Gosairhat)</option><option value="Jazeera">জাজিরা (Jazeera)</option><option value="Naria">নড়িয়া (Naria)</option><option value="Shariatpur Sadar">শরীয়তপুর সদর (Shariatpur Sadar)</option><option value="Shakhipur">সখিপুর (Shakhipur)</option>'
    }
    if (DisList == 'Tangail') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Basail">বাসাইল (Basail)</option><option value="Bhuapur">ভুয়াপুর (Bhuapur)</option><option value="Delduar">দেলদুয়ার (Delduar)</option><option value="Dhanbari">ধনবাড়ী (Dhanbari)</option><option value="Ghatail">ঘাটাইল (Ghatail)</option><option value="Gopalpur">গোপালপুর (Gopalpur)</option><option value="Kalihati">কালাহাতি (Kalihati)</option><option value="Madhupur">মধুপুর (Madhupur)</option><option value="Mirzapur">মির্জাপুর (Mirzapur)</option><option value="Nagarpur">নাগরপুর (Nagarpur)</option><option value="Shakhipur">সখিপুর (Shakhipur)</option><option value="Tangail">টাঙ্গাইল (Tangail)</option>'
    }

    //Khulna Division

    if (DisList == 'Bagerhat') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Bagerhat Sadar">বাগেরহাট সদর (Bagerhat Sadar)</option><option value="Chitalmari">চিতলমারী (Chitalmari)</option><option value="Fakirhat">ফকিরহাট (Fakirhat)</option><option value="Kachua">কচুয়া (Kachua)</option><option value="Mollahat">মোল্লাহাট (Mollahat)</option><option value="Mongla">মোংলা (Mongla)</option><option value="Morrelganj">মোড়েলগঞ্জ (Morrelganj)</option><option value="Sarankhola">শরণখোলা (Sarankhola)</option>'
    }
    if (DisList == 'Chuadanga') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Alamdanga ">আলমডাঙ্গা (Alamdanga)</option><option value="Chuadanga Sadar">চুয়াডাঙ্গা সদর (Chuadanga Sadar)</option><option value="Damurhuda">দামুড়হুদা (Damurhuda)</option><option value="Darsana">দর্শনা (Darsana)</option><option value="Jibannagar">জীবননগর (Jibannagar)</option>'
    }
    if (DisList == 'Jashore') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Abhaynagar ">অভয়নগর (Abhaynagar)</option><option value="Bagherpara">বাঘারপাড়া (Bagherpara)</option><option value="Chaugachha ">চৌগাছা (Chaugachha)</option><option value="Jashore Sadar">যশোর সদর (Jashore Sadar)</option><option value="Jhikargacha">ঝিকরগাছা (Jhikargacha)</option><option value="Keshabpur">কেশবপুর (Keshabpur)</option><option value="Manirampur">মনিরামপুর (Manirampur)</option><option value="Sharsha">শার্শা (Sharsha)</option>'
    }
    if (DisList == 'Jhenaidah') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Harinakundu">হরিণাকুণ্ড (Harinakundu)</option><option value="Jhenaidah Sadar">ঝিনাইদহ সদর (Jhenaidah Sadar)</option><option value="Kaliganj">কালীগঞ্জ (Kaliganj)</option><option value="Kotchandpur">কোটচাঁদপুর (Kotchandpur)</option><option value="Maheshpur">মহেশপুর (Maheshpur)</option><option value="Shailkupa">শৈলকুপা (Shailkupa)</option>'
    }
    if (DisList == 'Khulna') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Batiaghata">বটিয়াঘাটা (Batiaghata)</option><option value="Dacope">দাকোপ (Dacope)</option><option value="Dighalia">দিঘলিয়া (Dighalia)</option><option value="Dumuria">ডুমুরিয়া (Dumuria)</option><option value="Koyra">কয়রা (Koyra)</option><option value="Paikgachha">পাইকগাছা (Paikgachha)</option><option value="Phultala">ফুলতলা (Phultala)</option><option value="Rupsha">রূপসা (Rupsha)</option><option value="Terokhada">তেরখাদা (Terokhada)</option>'
    }
    if (DisList == 'Kustia') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Bheramara">ভেড়ামারা (Bheramara)</option><option value="Daulatpur">দৌলতপুর (Daulatpur)</option><option value="Khoksa">খোকসা (Khoksa)</option><option value="Kumarkhali">কুমারখালি (Kumarkhali)</option><option value="Kushtia Sadar">কুষ্টিয়া সদর (Kushtia Sadar)</option>'
    }
    if (DisList == 'Magura') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Magura Sadar">মাগুরা সদর (Magura Sadar)</option><option value="Mohammadpur">মহম্মদপুর (Mohammadpur)</option><option value="Shalikha">শালিখা (Shalikha)</option><option value="Sreepur">শ্রীপুর (Sreepur)</option>'
    }
    if (DisList == 'Meherpur') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Meherpur Sadar">মেহেরপুর সদর (Meherpur Sadar)</option><option value="Mujibnagar">মুজিবনগর (Mujibnagar)</option><option value="Gangni">গাংনী (Gangni)</option>'
    }
    if (DisList == 'Narail') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Lohagara">লোহাগড়া (Lohagara)</option><option value="Kalia">কালিয়া (Kalia)</option><option value="Narail Sadar">নড়াইল সদর (Narail Sadar)</option>'
    }
    if (DisList == 'Satkhira') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Assasuni">আশাশুনি (Assasuni)</option><option value="Debhata">দেবহাটা (Debhata)</option><option value="Kalaroa">কলারোয়া (Kalaroa)</option><option value="Kaliganj">কালীগঞ্জ (Kaliganj)</option><option value="Satkhira Sadar">সাতক্ষীরা সদর (Satkhira Sadar)</option><option value="Shyamnagar">শ্যামনগর (Shyamnagar)</option><option value="Tala">তালা (Tala)</option>'
    }

    //Mymensingh Division

    if (DisList == 'Mymensingh') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Bhaluka">ভালুকা (Bhaluka)</option><option value="Dhobaura">ধোবাউড়া (Dhobaura)</option><option value="Fulbaria">ফুলবাড়িয়া (Fulbaria)</option><option value="Gafargaon">গফরগাঁও (Gafargaon)</option><option value="Gauripur">গৌরীপুর (Gauripur)</option><option value="Haluaghat">হালুয়াঘাট (Haluaghat)</option><option value="Ishwarganj">ঈশ্বরগঞ্জ (Ishwarganj)</option><option value="Muktagacha">মুক্তাগাছা (Muktagacha)</option><option value="Mymensingh Sadar">ময়মনসিংহ সদর (Mymensingh Sadar)</option><option value="Nandail">নান্দাইল (Nandail)</option><option value="Phulpur">ফুলপুর (Phulpur)</option><option value="Tarakanda">তারাকান্দা (Tarakanda)</option><option value="Trishal">ত্রিশাল (Trishal)</option>'
    }

    if (DisList == 'Netrokona') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Atpara">আটপাড়া (Atpara)</option><option value="Barhatta">বারহাট্টা (Barhatta)</option><option value="Durgapur">দূর্গাপুর (Durgapur)</option><option value="Kendua">কেন্দুয়া (Kendua)</option><option value="Khaliajuri">খা‌লিয়াজুরী (Khaliajuri)</option><option value="Kolmkakanda">কমলাকান্দা (Kolmkakanda)</option><option value="Modon">মদন (Modon)</option><option value="Mohangonj">মোহনগঞ্জ (Mohangonj)</option><option value="Netrokona Sadar">নেত্রকোণা সদর (Netrokona Sadar)</option><option value="Purbodhola">পূর্বধলা (Purbodhola)</option>'
    }
    if (DisList == 'Jamalpur') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Bakshiganj">বকশীগঞ্জ (Bakshiganj)</option><option value="Dewanganj">দেওয়ানগঞ্জ (Dewanganj)</option><option value="Islampur">ইসলামপুর (Islampur)</option><option value="Jamalpur Sadar">জামালপুর সদর(Jamalpur Sadar)</option><option value="Madarganj">মাদারগঞ্জ (Madarganj)</option><option value="Melandaha">মেলান্দহ (Melandaha)</option><option value="Sharishabari">সরিষাবাড়ী (Sharishabari)</option>'
    }
    if (DisList == 'Sherpur') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Jhenaigati">ঝিনাইগাতী (Jhenaigati)</option><option value="Nakla">নকলা (Nakla)</option><option value="Nalitabari">নালিতাবাড়ি (Nalitabari)</option><option value="Sherpur Sadar">শেরপুর সদর (Sherpur Sadar)</option><option value="Sreebardi">শ্রীবর্দী (Sreebardi)</option>'
    }

    //Rajshahi Division
    if (DisList == 'Bagura') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Adamdighi">আদমদিঘী (Adamdighi)</option><option value="Bagura Sadar">বগুড়া সদর  (Bagura Sadar)</option><option value="Dhunat">ধুনট (Dhunat)</option><option value="Dupchanchia">দুপচাচিয়া (Dupchanchia)</option><option value="Gabtali">গাবতলী (Gabtali)</option><option value="Kahaloo">কাহালু (Kahaloo)</option><option value="Nandigram">নন্দিগ্রাম (Nandigram)</option><option value="Sahajanpur">শাহাজাহানপুর (Sahajanpur)</option><option value="Sariakandi">সারিয়াকান্দি (Sariakandi)</option><option value="Sherpur">শেরপুর (Sherpur)</option><option value="Shibganj">শিবগঞ্জ (Shibganj)</option><option value="Sonatala">সোনাতলা (Sonatala)</option>'
    }
    if (DisList == 'Chapainawabganj') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Bholahat">ভোলাহাট (Bholahat)</option><option value="Chapainawabganj Sadar">চাঁপাইনবাবগঞ্জ সদর  (Chapainawabganj Sadar)</option><option value="Gomastapur">গোমস্তাপুর (Gomastapur)</option><option value="Shibganj">শিবগঞ্জ (Shibganj)</option>'
    }
    if (DisList == 'Joypurhat') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Akkelpur">আক্কেলপুর (Akkelpur)</option><option value="Joypurhat Sadar">জয়পুরহাট সদর (Joypurhat Sadar)</option><option value="Kalai">কালাই (Kalai)</option><option value="Khetlal">খেতলাল (Khetlal)</option><option value="Panchbibi">পাঁচবিবি (Panchbibi)</option>'
    }
    if (DisList == 'Naogaon') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Atrai">আত্রাই (Atrai)</option><option value="Badalgachhi">বদলগাছি (Badalgachhi)</option><option value="Dhamoirhat">ধামইরহাট (Dhamoirhat)</option><option value="Manda">মান্দা (Manda)</option><option value="Mohadevpur">মহাদেবপুর (Mohadevpur)</option><option value="Naogaon Sadar">নওগাঁ সদর (Naogaon Sadar)</option><option value="Niamatpur">নিয়ামতপুর (Niamatpur)</option><option value="Patnitala">পত্মীতলা (Patnitala)</option><option value="Porsha">পোরশা (Porsha)</option><option value="Raninagar">রানীনগর (Raninagar)</option><option value="Sapahar">সাপাহার (Sapahar)</option>'
    }
    if (DisList == 'Natore') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Bagatipara">বাগাতিপাড়া (Bagatipara)</option><option value="Baraigram">বড়াইগ্রাম (Baraigram)</option><option value="Gurudaspur">গুরুদাসপুর (Gurudaspur)</option><option value="Lalpur">লালপুর (Lalpur)</option><option value="Natore Sadar">নাটোর সদর (Natore Sadar)</option><option value="Naldanga">নলডাঙ্গা (Naldanga)</option><option value="Singra">সিংড়া (Singra)</option>'
    }
    if (DisList == 'Pabna') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Atgharia">আটঘরিয়া (Atgharia)</option><option value="Bera">বেড়া (Bera)</option><option value="Bhangura">ভাঙ্গুরা (Bhangura)</option><option value="Chatmohar">চাটমোহর (Chatmohar)</option><option value="Faridpur">ফরিদপুর (Faridpur)</option><option value="Ishwardi">ঈশ্বরদী (Ishwardi)</option><option value="Pabna Sadar">পাবনা সদর (Pabna Sadar)</option><option value="Santhia">সাঁথিয়া (Santhia)</option><option value="Suzanagar">সুজানগর (Suzanagar)</option>'
    }
    if (DisList == 'Rajshahi') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Bagmara">বাগমারা (Bagmara)</option></option><option value="Bagha">বাঘা (Bagha)</option><option value="Boalia">বোয়ালিয়া (Boalia)</option><option value="Charghat">চারঘাট (Charghat)</option><option value="Durgapur">দুর্গাপুর (Durgapur)</option><option value="Godagari">গোদাগাড়ি (Godagari)</option><option value="Mohanpur">মোহনপুর (Mohanpur)</option><option value="Motihar">মতিহার (Motihar)</option><option value="Paba">পবা (Paba)</option><option value="Puthia">পুঠিয়া (Puthia)</option><option value="Rajpara">রাজপাড়া (Rajpara)</option><option value="Shah Makhdum">শাহ মখদুম (Shah Makhdum)</option><option value="Tanore">তানোর (Tanore)</option>'
    }
    if (DisList == 'Sirajganj') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Belkuchi">বেলকুচি (Belkuchi)</option><option value="Chauhali">চৌহালী (Chauhali)</option><option value="Kamarkhanda">কামারখন্দ (Kamarkhanda)</option><option value="Kazipur">কাজীপুর (Kazipur)</option><option value="Raiganj">রায়গঞ্জ (Raiganj)</option><option value="Shahjadpur">শাহজাদপুর (Shahjadpur)</option><option value="Sirajganj Sadar">সিরাজগঞ্জ সদর (Sirajganj Sadar)</option><option value="Tarash">তাড়াশ (Tarash)</option><option value="Ullapara">উল্লাপাড়া (Ullapara)</option>'
    }

    //Rangpur Division

    if (DisList == 'Dinajpur') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Biral">বিরল (Biral)</option><option value="Birampur">বিরামপুর (Birampur)</option><option value="Birganj">বীরগঞ্জ (Birganj)</option><option value="Bochaganj">বোঁচাগঞ্জ (Bochaganj)</option><option value="Chirirbandar">চিরিরবন্দর (Chirirbandar)</option><option value="Dinajpur Sadar">দিনাজপুর সদর (Dinajpur Sadar)</option><option value="Ghoraghat">ঘোড়াঘাট (Ghoraghat)</option><option value="Hakimpur">হাকিমপুর (Hakimpur)</option><option value="Kaharole">কাহারোল (Kaharole)</option><option value="Khansama">খানসামা (Khansama)</option><option value="Nawabganj">নবাবগঞ্জ (Nawabganj)</option><option value="Parbatipur">পার্বতীপুর (Parbatipur)</option><option value="Phulbari">ফুলবাড়ী (Phulbari)</option>'
    }
    if (DisList == 'Gaibandha') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Fulchhari">ফুলছড়ি (Fulchhari)</option><option value="Gaibandha Sadar">গাইবান্ধা সদর (Gaibandha Sadar)</option><option value="Gobindaganj">গোবিন্দগঞ্জ (Gobindaganj)</option><option value="Palashbari">পলাশবাড়ী (Palashbari)</option><option value="Sadullapur">সাদুল্লাপুর (Sadullapur)</option><option value="Saghata">সাঘাটা (Saghata)</option><option value="Sundarganj">সুন্দরগঞ্জ (Sundarganj)</option>'
    }
    if (DisList == 'Kurigram') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Bhurungamari">ভূরুঙ্গামারী (Bhurungamari)</option><option value="Char Rajibpur">চর রাজিবপুর (Char Rajibpur)</option><option value="Chilmari">চিলমারী (Chilmari)</option><option value="Kurigram Sadar">কুড়িগ্রাম সদর (Kurigram Sadar)</option><option value="Nageshwari">নাগেশ্বরী (Nageshwari)</option><option value="Phulbari">ফুলবাড়ী (Phulbari)</option><option value="Rajarhat">রাজারহাট (Rajarhat)</option><option value="Rowmari">রৌমারী (Rowmari)</option><option value="Ulipur">উলিপুর (Ulipur)</option>'
    }
    if (DisList == 'Lalmonirhat') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Aditmari">আদিতমারী (Aditmari)</option><option value="Hatibandha">হাতীবান্ধা (Hatibandha)</option><option value="Kaliganj">কালীগঞ্জ (Kaliganj)</option><option value="Lalmonirhat Sadar">লালমনিরহাট সদর (Lalmonirhat Sadar)</option><option value="Patgram">পাটগ্রাম (Patgram)</option>'
    }
    if (DisList == 'Nilphamari') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Dimla">ডিমলা (Dimla)</option><option value="Domar">ডোমার (Domar)</option><option value="Jaldhaka">জলঢাকা (Jaldhaka)</option><option value="Kishoreganj">কিশোরগঞ্জ (Kishoreganj)</option><option value="Nilphamari Sadar">নীলফামারী সদর (Nilphamari Sadar)</option><option value="Saidpur">সৈয়দপুর (Saidpur)</option>'
    }
    if (DisList == 'Panchagarh') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Atwari">আটোয়ারী (Atwari)</option><option value="Boda">বোদা (Boda)</option><option value="Debiganj">দেবীগঞ্জ (Debiganj)</option><option value="Panchagarh Sadar">পঞ্চগড় সদর (Panchagarh Sadar)</option><option value="Tetulia">তেঁতুলিয়া (Tetulia)</option>'
    }
    if (DisList == 'Rangpur') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Badarganj">বদরগঞ্জ (Badarganj)</option><option value="Gangachhara">গঙ্গাছড়া (Gangachhara)</option><option value="Kaunia">কাউনিয়া (Kaunia)</option><option value="Mithapukur">মিঠাপুকুর (Mithapukur)</option><option value="Pirgachha">পীরগাছা (Pirgachha)</option><option value="Pirganj">পীরগঞ্জ (Pirganj)</option><option value="Rangpur Sadar">রংপুর সদর (Rangpur Sadar)</option><option value="Taraganj">তারাগঞ্জ (Taraganj)</option>'
    }
    if (DisList == 'Thakurgaon') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Baliadangi">বালিয়াডাঙ্গী (Baliadangi)</option><option value="Haripur">হরিপুর (Haripur)</option><option value="Pirganj">পীরগঞ্জ (Pirganj)</option><option value="Ranisankail">রাণীশংকৈল (Ranisankail )</option><option value="Thakurgaon Sadar">ঠাকুরগাঁও সদর (Thakurgaon Sadar)</option>'
    }
    //Sylhet Division
    if (DisList == 'Habiganj') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Azmiriganj">আজমিরীগঞ্জ (Azmiriganj)</option><option value="Bahubal">বাহুবল (Bahubal)</option><option value="Baniachang">বানিয়াচং (Baniachang)</option><option value="Chunarughat">চুনারুঘাট (Chunarughat)</option><option value="Habiganj Sadar">হবিগঞ্জ সদর (Habiganj Sadar)</option><option value="Lakhai">লাখাই (Lakhai)</option><option value="Madhabpur">মাধবপুর (Madhabpur)</option><option value="Nabiganj">নবীগঞ্জ (Nabiganj)</option><option value="Shayestaganj">শায়েস্তাগঞ্জ (Shayestaganj)</option>'
    }
    if (DisList == 'Moulvibazar') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Barlekha">বড়লেখা (Barlekha)</option><option value="Juri">জুড়ী (Juri)</option><option value="Kamalganj">কমলগঞ্জ (Kamalganj)</option><option value="Kulaura">কুলাউড়া (Kulaura)</option><option value="Moulvibazar">মৌলভীবাজার (Moulvibazar)</option><option value="Rajnagar">রাজনগর (Rajnagar)</option><option value="Sreemongal">শ্রীমঙ্গল (Sreemongal)</option>'
    }
    if (DisList == 'Sunamganj') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Bishwamvarpur">বিশ্বম্ভরপুর (Bishwamvarpur)</option><option value="Chhatak">ছাতক (Chhatak)</option><option value="Derai">দিরাই (Derai)</option><option value="Dharampasha">ধরমপাশা (Dharampasha)</option><option value="Dowarabazar">দোয়ারাবাজার (Dowarabazar)</option><option value="Jagannathpur">জগন্নাথপুর (Jagannathpur)</option><option value="Jamalganj">জামালগঞ্জ (Jamalganj)</option><option value="Shantiganj-South Sunamganj">শান্তিগঞ্জ-দক্ষিণ সুনামগঞ্জ (Shantiganj-South Sunamganj)</option><option value="Sulla">শাল্লা (Sulla)</option><option value="Sunamganj">সুনামগঞ্জ (Sunamganj)</option><option value="Tahirpur">তাহিরপুর (Tahirpur)</option>'
    }
    if (DisList == 'Sylhet') {
        var upazilaList = '<option disabled selected>Select Upazila</option><option value="Balaganj">বালাগঞ্জ (Balaganj)</option><option value="Beanibazar">বিয়ানিবাজার (Beanibazar)</option><option value="Bimanbondar">বিমানবন্দর (Bimanbondar)</option><option value="Bishwanath">বিশ্বনাথ (Bishwanath)</option><option value="Companiganj">কোম্পানীগঞ্জ (Companiganj)</option><option value="Fenchuganj">ফেঞ্চুগঞ্জ (Fenchuganj)</option><option value="Golapganj">গোলাপগঞ্জ (Golapganj)</option><option value="Gowainghat">গোয়াইনঘাট (Gowainghat)</option><option value="Jaintiapur">জৈন্তাপুর (Jaintiapur)</option><option value="Jalalabad">জালালাবাদ (Jalalabad)</option><option value="Kanaighat">কানাইঘাট (Kanaighat)</option><option value="Kotwali">কোতয়ালী (Kotwali)</option><option value="Maglabazar">মগলাবাজার (Maglabazar)</option><option value="Osmani Nagar">ওসমানী নগর (Osmani Nagar)</option><option value="Shahporan">শাহপরান (Shahporan)</option><option value="South Shurma">দক্ষিণ সুরমা (South Shurma)</option><option value="Sylhet Sadar">সিলেট সদর (Sylhet Sadar)</option><option value="Zakiganj">জকিগঞ্জ (Zakiganj)</option>'
    }
    document.getElementById("upazila").innerHTML = upazilaList;
}

// Thana Section select
function thanaList() {
    var DisList = document.getElementById('district').value;

    //Barishal Division

    if (DisList == 'Barguna') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Amtali">আমতলী (Amtali)</option><option value="Bamna">বামনা (Bamna)</option><option value="Barguna Sadar">বরগুনা সদর (Barguna Sadar)</option><option value="Betagi">বেতাগী (Betagi)</option><option value="Patharghata">পাথরঘাটা (Patharghata)</option><option value="Taltali">তালতলী (Taltali)</option>';
    }
    if (DisList == 'Barishal') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Agailjhara">আগৈলঝাড়া (Agailjhara)</option><option value="Babuganj">বাবুগঞ্জ (Babuganj)</option><option value="Bakerganj">বাকেরগঞ্জ (Bakerganj)</option><option value="Banaripara">বানারীপাড়া (Banaripara)</option><option value="Barishal Sadar">বরিশাল সদর (Barishal Sadar)</option><option value="Gournadi">গৌড়নদী (Gournadi)</option><option value="Hijla">হিজলা (Hijla)</option><option value="Mehendiganj">মেহেন্দিগঞ্জ (Mehendiganj)</option><option value="Muladi">মুলাদী (Muladi)</option><option value="Wazirpur">উজিরপুর (Wazirpur)</option>'
    }
    if (DisList == 'Bhola') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Bhola Sadar">ভোলা সদর (Bhola Sadar)</option><option value="Burhanuddin">বোরহান উদ্দিন (Burhanuddin)</option><option value="Char Fasson">চরফ্যাশন (Char Fasson)</option><option value="Daulatkhan">দৌলতখান (Daulatkhan)</option><option value="Lalmohan">লালমোহন (Lalmohan)</option><option value="Manpura">মনপুরা (Manpura)</option><option value="Tazumuddin">তজুমদ্দিন (Tazumuddin)</option>'
    }
    if (DisList == 'Jhalokati') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Jhalokati Sadar">ঝালকাঁঠি সদর (Jhalokati Sadar)</option><option value="Kathalia">কাঠালিয়া (Kathalia)</option><option value="Nalchity">নলছিটি (Nalchity)</option><option value="Rajapur">রাজাপুর (Rajapur)</option>'
    }
    if (DisList == 'Patuakhali') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Dumki">দুমকি (Dumki)</option><option value="Patuakhali Sadar">পটুয়াখালী সদর (Patuakhali Sadar)</option><option value="Mirzaganj">মির্জাগঞ্জ (Mirzaganj)</option><option value="Bauphal">বাউফল (Bauphal)</option><option value="Galachipa">গলাচিপা (Galachipa)</option><option value="Dashmina">দশমিনা (Dashmina)</option><option value="Rangabali">রাঙ্গাবালী (Rangabali)</option><option value="Kolapara">কলাপাড়া (Kolapara)</option>'
    }
    if (DisList == 'Pirojpur') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Bhandaria">ভান্ডারিয়া (Bhandaria</option><option value="Kawkhali">কাউখালী (Kawkhali)</option><option value="Mathbaria">মঠবাড়ীয়া (Mathbaria)</option><option value="Nazirpur">নাজিরপুর (Nazirpur)</option><option value="Nesarabad">নেছারাবাদ (Nesarabad)</option><option value="Pirojpur Sadar">পিরোজপুর সদর (Pirojpur Sadar)</option><option value="Indurkani">ইন্দুরকানী (Indurkani)</option>'
    }

    //Chittagong Division
    if (DisList == 'Bandarban') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Ali Kadam">আলী কদম (Ali Kadam)</option><option value="Bandarban Sadar">বান্দরবান সদর (Bandarban Sadar)</option><option value="Naikhongchhari">নাইক্ষ্যাংছড়ি (Naikhongchhari)</option><option value="Rowangchhari">রোয়াংছড়ি (Rowangchhari)</option><option value="Ruma">রুমা (Ruma)</option><option value="Thanchi">থানচি (Thanchi)</option>'
    }
    if (DisList == 'Brahmanbaria') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Brahmanbaria Sadar">ব্রাহ্মণবাড়িয়া সদর (Brahmanbaria Sadar)</option><option value="Kasba">কসবা (Kasba)</option><option value="Akhaura">আখাউড়া (Akhaura)</option><option value="Ashuganj">আশুগঞ্জ (Ashuganj)</option><option value="Bancharampur">বাঞ্ছারামপুর (Bancharampur)</option><option value="Bijoynagar">বিজয়নগর (Bijoynagar)</option><option value="Nasirnagar">নাসিরনগর (Nasirnagar)</option><option value="Nabinagar">নবীনগর (Nabinagar)</option><option value="Sarail">সরাইল (Sarail)</option>'
    }
    if (DisList == 'Chandpur') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Chandpur Sadar">চাঁদপুর সদর (Chandpur Sadar)</option><option value="Faridganj">ফরিদগঞ্জ (Faridganj)</option><option value="Haimchar">হাইমচর (Haimchar)</option><option value="Kachua">কচুয়া (Kachua)</option><option value="Matlab Dakshin">মতলব দক্ষিণ (Matlab Dakshin)</option><option value="Matlab Uttar">মতলব উত্তর (Matlab Uttar)</option><option value="Shahrasti">শহরাস্তি (Shahrasti)</option>'
    }
    if (DisList == 'Chattogram') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Akbarshah">আকবরশাহ (Akbarshah)</option><option value="Anwara">আনোয়ারা (Anwara)</option><option value="Bakoliya">বাকলিয়া (Bakoliya)</option><option value="Bandar">বন্দর (Bandar)</option><option value="Banshkhali">বাশঁখালী (Banshkhali)</option><option value="Bhujpur">ভূজপুর (Bhujpur)</option><option value="Boalkhali">বোয়ালখালী (Boalkhali)</option><option value="Bayazid">বায়েজিদ (Bayazid)</option><option value="Chandgaon">চাঁদগাও (Chandgaon)</option><option value="Chandanaish">চন্দনাইশ (Chandanaish)</option><option value="Chawkbazar">চকবাজার (Chawbazar)</option><option value="Double Mooring">ডবলমুরিং (Double Mooring)</option><option value="EPZ Thana">ইপিজেড থানা (EPZ Thana)</option><option value="Fatikchhari">ফটিকছড়ি (Fatikchhari)</option><option value="Halishahar">হালিশহর (Halishahar)</option><option value="Hathazari">হাটহাজারী (Hathazari)</option><option value="Karnaphuli">কর্ণফুলী (Karnaphuli)</option><option value="Khulshi">খুলশী (Khulshi)</option><option value="Kotwali">কোতোয়ালী (Kotwali)</option><option value="Lohagara">লোহাগাড়া (Lohagara)</option><option value="Mirsharai">মীরসরাই (Mirsharai)</option><option value="Panchlaish">পাঁচলাইশ (Panchlaish)</option><option value="Pahartali">পাহাড়তলী (Pahartali)</option><option value="Patenga">পতেঙ্গা (Patenga)</option><option value="Patiya">পটিয়া (Patiya)</option><option value="Rangunia">রাঙ্গুনিয়া (Rangunia)</option><option value="Raozan">রাউজান (Raozan)</option><option value="Sadarghat">সদরঘাট (Sadarghat)</option><option value="Sandwip">সন্দ্বীপ (Sandwip)</option><option value="Satkania">সাতকানিয়া (Satkania)</option><option value="Sitakunda">শীতাকুন্ড (Sitakunda)</option>'
    }
    if (DisList == 'Cumilla') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Barura">Barura</option><option value="Brahmanpara">ব্রাহ্মণপাড়া (Brahmanpara)</option><option value="Burichong">বুড়িচং (Burichong)</option><option value="Comilla Sadar">কুমিল্লা সদর  (Comilla Sadar)</option><option value="Comilla Sadar Dakshin">কুমিল্লা সদর দক্ষিণ (Comilla Sadar Dakshin)</option><option value="Chandina">চান্দিনা (Chandina)</option><option value="Chauddagram">চৌদ্দগ্রাম (Chauddagram)</option><option value="Daudkandi">দাউদকান্দি  (Daudkandi)</option><option value="Debidwar">দেবিদ্বার (Debidwar)</option><option value="Homna">হোমনা (Homna)</option><option value="Laksam">লাকসাম (Laksam)</option><option value="Lalmai">লালমাই (Lalmai)</option><option value="Monohorganj">মনোহরগঞ্জ (Monohorganj)</option><option value="Meghna">মেঘনা (Meghna)</option><option value="Muradnagar">মুরাদনগর (Muradnagar)</option><option value="Nangalkot">নাঙ্গলকোট (Nangalkot)</option><option value="Titas">তিতাস(Titas)</option>'
    }
    if (DisList == 'Cox\'s Bazar') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Chakaria">চকরিয়া (Chakaria)</option><option value="Cox\'s Bazar">কক্সবাজার সদর (Cox\'s Bazar)</option><option value="Kutubdia">কুতুবদিয়া (Kutubdia)</option><option value="Maheshkhali">মহেশখালী (Maheshkhali)</option><option value="Ramu">রামু (Ramu)</option><option value="Ukhia">উখিয়া (Ukhia)</option><option value="Pekua">পেকুয়া (Pekua)</option><option value="Eidgaon">ঈদগাঁও (Eidgaon)</option>'
    }
    if (DisList == 'Feni') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Chhagalnaiya">ছাগলনাইয়া (Chhagalnaiya)</option><option value="Daganbhuiyan">দাগনভূইয়া (Daganbhuiyan)</option><option value="Feni Sadar">ফেনী সদর (Feni Sadar)</option><option value="Fulgazi">ফুলগাজী (Fulgazi)</option><option value="Parshuram">পরশুরাম (Parshuram)</option><option value="Sonagazi">সোনাগাজী (Sonagazi)</option>'
    }
    if (DisList == 'Khagrachhari') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Dighinala">দিঘীনালা (Dighinala)</option><option value="Khagrachhari Sadar">খাগড়াছড়ি সদর (Khagrachhari Sadar)</option><option value="Lakshmichhari">লক্ষীছড়ি (Lakshmichhari)</option><option value="Mahalchhari">মহালছড়ি (Mahalchhari)</option><option value="Manikchhari">মানিকছড়ি (Manikchhari)</option><option value="Matiranga">মাটিরাঙ্গা (Matiranga)</option><option value="Panchhari">পানছড়ি (Panchhari)</option><option value="Ramgarh">রামগড় (Ramgarh)</option><option value="Guimara">গুইমারা (Guimara)</option>'
    }
    if (DisList == 'Lakshmipur') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Kamalnagar">কমলনগর (Kamalnagar)</option><option value="Lakshmipur">লক্ষ্মীপুর (Lakshmipur)</option><option value="Raipur">রায়পুর (Raipur)</option><option value="Ramganj">রামগঞ্জ (Ramganj)</option><option value="Ramgoti">রামগতি (Ramgoti)</option>';
    }
    if (DisList == 'Noakhali') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Begumganj">বেগমগঞ্জ (Begumganj)</option><option value="Bhashanchar">ভাসানচর (Bhashanchar)</option><option value="Chatkhil">চাটখিল (Chatkhil)</option><option value="Companiganj">কোম্পানিগঞ্জ (Companiganj)</option><option value="Hatia">হাতিয়া (Hatia)</option><option value="Kabirhat">কবিরহাট (Kabirhat)</option><option value="Noakhali Sadar">নোয়াখালী সদর (Noakhali Sadar)</option><option value="Senbagh">সেনবাগ (Senbagh)</option><option value="Sonaimuri">সোনাইমুড়ী (Sonaimuri)</option><option value="Subornochar">সুবুর্ণচর (Subornochar)</option>';
    }
    if (DisList == 'Rangamati') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Bagaichhari">বাঘাইছড়ি (Bagaichhari)</option><option value="Belaichhari">বিলাইছড়ি (Belaichhari)</option><option value="Barkal">বরকল (Barkal)</option><option value="Juraichhari">জুরাছড়ি (Juraichhari)</option><option value="Kaptai">কাপ্তাই (Kaptai)</option><option value="Kaukhali">কালুখালী (Kaukhali)</option><option value="Langadu">লাংগদু (Langadu)</option><option value="Naniarchar">নানিয়ারচর (Naniarchar)</option><option value="Rajasthali">রাজস্থলী (Ranjasthali)</option><option value="Rangamati Sadar">রাঙ্গামাটি সদর (Rangamati Sadar)</option>';
    }

    //Dhaka Division

    if (DisList == 'Dhaka') {
        var thanaList = '<option disabled selected>Select Thana</option><optgroup label="Dhaka-North"><option value="Adabor">আদাবর (Adabor)</option><option value="Badda">বাড্ডা (Badda)</option><option value="Banani">বনানী (Banani)</option><option value="Gulshan">গুলশান (Gulshan)</option><option value="Bhashantek">ভাসানটেক (Bhashantek)</option><option value="Bimanbandar">বিমানবন্দর (Bimanbandar)</option><option value="Cantonment">ক্যান্টনমেন্ট (Cantonment)</option><option value="Darussalam">দারুসসালাম (Darussalam)</option><option value="Hatirjheel">হাতিরঝিল (Hatirjheel)</option><option value="Kafrul">কাফরুল (Kafrul)</option><option value="Khilkhet">খিলক্ষেত (Khilkhet)</option><option value="Mirpur">মিরপুর (Mirpur)</option><option value="Mohammadpur">মোহাম্মদপুর (Mohammadpur)</option><option value="Pallabi">পল্লবী (Pallabi)</option><option value="Rampura">রামপুরা (Rampura)</option><option value="Rupnagar">রূপনগর (Rupnagar)</option><option value="Shah Ali">শাহ আলী (Shah Ali)</option><option value="Sher-E-Bangla Nagar">শের-এ-বাংলা নগর (Sher-E-Bangla Nagar)</option><option value="Shilpanchal">শিল্পাঞ্চল (Shilpanchal)</option><option value="Tejgaon">তেজগাও (Tejgaon)</option><option value="Turag">তুরাগ (Turag)</option><option value="Uttara-East">উত্তরা পূর্ব (Uttara-East)</option><option value="Uttara-West">উত্তরা পশ্চিম (Uttara-West)</option><option value="Uttarkhan">উত্তরখান (Uttarkhan)</option><option value="Vatara">ভাটারা (Vatara)</option><optgroup label="Dhaka-South"><option value="Bangshal">বংশাল (Bangshal)</option><option value="Chawkbazar">চকবাজার (Chawkbazar)</option><option value="Demra">ডেমরা (Demra)</option><option value="Dhanmondi">ধানমন্ডি (Dhanmondi)</option><option value="Gandaria">গেন্ডারিয়া (Gandaria)</option><option value="Hazaribagh">হাজারীবাগ (Hazaribagh)</option><option value="Jatrabari">যাত্রাবাড়ী (Jatrabari)</option><option value="Kadamtali">কদমতলী (Kadamtali)</option><option value="Kalabagan">কলাবাগান (Kalabagan)</option><option value="Khilgaon">খিলগাঁও (Khilgaon)</option><option value="Kotwali">কোতোয়ালী (Kotwali)</option><option value="Lalbagh">লালবাগ (Lalbagh)</option><option value="Motijheel">মতিঝিল (Motijheel)</option><option value="Mugda">মুগদা (Mugda)</option><option value="Paltan">পল্টন (Paltan)</option><option value="Ramna">রমনা (Ramna)</option><option value="Sabujbagh">সবুজবাগ (Sabujbagh)</option><option value="Shahbag">শাহাবাগ (Shahbag)</option><option value="Shahjahanpur">শাহাজাহানপুর (Shahjahanpur)</option><option value="Shampur">শ্যামপুর (Shampur)</option><option value="Sutrapur">সুত্রাপুর (Sutrapur)</option><option value="Wari">ওয়ারী (Wari)</option><optgroup label="Others"><option value="Dhamrai">ধামরাই (Dhamrai)</option><option value="Dohar">দোহারপ (Dohar)</option><option value="Keraniganj">কেরাণীগঞ্জ (Keraniganj)</option><option value="Nawabganj">নবাবগঞ্জ (Nawabganj)</option><option value="Savar">সাভার (Savar)</option>';
    }
    if (DisList == 'Faridpur') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Alfadanga">আলফাডাঙ্গা (Alfadanga)</option><option value="Bhanga">ভাঙ্গা (Bhanga)</option><option value="Boalmari">বোয়ালমারী (Boalmari)</option><option value="Charbhadrasan">চরভদ্রসন (Charbhadrasan)</option><option value="Faridpur Sadar">ফরিদপুর সদর (Faridpur Sadar)</option><option value="Madhukhali">মধুখালী (Madhukhali)</option><option value="Nagarkanda">নগরকান্দা (Nagarkanda)</option><option value="Sadarpur">সদরপুর (Sadarpur)</option><option value="Saltha">সালথা (Saltha)</option>';
    }
    if (DisList == 'Gazipur') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Gazipur Sadar">গাজীপুর সদর (Gazipur Sadar)</option><option value="Kaliakair">কালিয়াকৈর (Kaliakair)</option><option value="Kaliganj">কালীগঞ্জ (Kaliganj)</option><option value="Kapasia">কাপাসিয়া (Kapasia)</option><option value="Sreepur">শ্রীপুর (Sreepur)</option>';
    }
    if (DisList == 'Gopalganj') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Gopalganj Sadar">গোপালগঞ্জ সদর (Gopalganj Sadar)</option><option value="Kashiani">কাশিয়ানী (Kashiani)</option><option value="Kotalipara">কোটালীপাড়া (Kotalipara)</option><option value="Muksudpur">মুকসুদপুর (Muksudpur)</option><option value="Tungipara">টুংগীপাড়া (Tungipara)</option>';
    }
    if (DisList == 'Kishoreganj') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Austagram">অষ্টগ্রাম (Austagram)</option><option value="Bajitpur">বাজিতপুর (Bajitpur)</option><option value="Bhairab">ভৈরব (Bhairab)</option><option value="Hossainpur">হোসেনপুর (Hossainpur)</option><option value="Itna">ইটনা (Itna)</option><option value="Karimganj">করিমগঞ্জ (Karimganj)</option><option value="Katiadi">কাটিয়াদী (Katiadi)</option><option value="Kishoreganj Sadar">কিশোরগঞ্জ সদর (Kishoreganj Sadar)</option><option value="Kuliarchar">কুলিয়ারচর (Kuliarchar)</option><option value="Mithamain">মিঠামইন (Mithamain)</option><option value="Nikili">নিকলী (Nikili)</option><option value="Pakundia">পাকুন্দিয়া (Pakundia)</option><option value="Tarail">তাড়াইল (Tarail)</option>';
    }
    if (DisList == 'Madaripur') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Dasar">ডাসার (Dasar)</option><option value="Kalkini">কালকিনি (Kalkini)</option><option value="Madaripur Sadar">মাদারীপুর সদর (Madaripur Sadar)</option><option value="Rajoir">রাজৈর (Rajoir)</option><option value="Shibchar">শিবচর (Shibchar)</option>';
    }
    if (DisList == 'Manikganj') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Daulatpur">দৌলতপুর (Daulatpur)</option><option value="Ghior">ঘিওর (Ghior)</option><option value="Harirampur">হরিরামপুর (Harirampur)</option><option value="Manikganj Sadar">মানিকগঞ্জ সদর (Manikganj Sadar)</option><option value="Sarutia">সাটুরিয়া (Sarutia)</option><option value="Shivalaya">শিবালয় (Shivalaya)</option><option value="Singair">সিঙ্গাইর (Singair)</option>';
    }
    if (DisList == 'Munshiganj') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Gazaria">গজারিয়া (Gazaria)</option><option value="Lohajang">লৌহজং (Lohajang)</option><option value="Munshiganj Sadar">মুন্সিগঞ্জ সদর (Munshiganj Sadar)</option><option value="Sirajdikhan">সিরাজদিখান (Sirajdikhan)</option><option value="Sreenagar">শ্রীনগর (Sreenagar)</option><option value="Tongibari">টংগীবাড়ী (Tongibari)</option>';
    }
    if (DisList == 'Narayanganj') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Araihazar">আড়াইহাজার (Araihazar)</option><option value="Baidder Bazar">বৈদ্যের বাজার (Baidder Bazar)</option><option value="Bandar">বন্দর (Bandar)</option><option value="Fatullah">ফতুল্লা (Fatullah)</option><option value="Narayanganj Sadar">নারায়নগঞ্জ সদর (Narayanganj Sadar)</option><option value="Rupganj">রূপগঞ্জ (Rupganj)</option><option value="Siddhirganj">সিদ্দিরগঞ্জ (Siddhirganj)</option><option value="Sonargaon">সোনারগাঁও (Sonargaon)</option>';
    }
    if (DisList == 'Narsingdi') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Belabo">বেলাবো (Belabo)</option><option value="Monohardi">মনোহরদি (Monohardi)</option><option value="Narsingdi Sadar">নরসিংদী সদর (Narsingdi Sadar)</option><option value="Palash">পলাশ (Palash)</option><option value="Raipura">রাইপুরা (Raipura)</option><option value="Shibpur">শিবপুর (Shibpur)</option>';
    }
    if (DisList == 'Rajbari') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Baliakandi">বালিয়াকান্দি (Baliakandi)</option><option value="Goalanda">গোয়ালন্দ (Goalanda)</option><option value="Kalukhali">কালুখালী (Kalukhali)</option><option value="Pangsha">পাংশা (Pangsha)</option><option value="Rajbari Sadar">রাজবাড়ী সদর (Rajbari Sadar)</option>';
    }
    if (DisList == 'Shariatpur') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Bhedarganj">ভেদরগঞ্জ (Bhedarganj)</option><option value="Damudya">ডামুড্যা (Damudya)</option><option value="Gosairhat">গোসাইরহাট (Gosairhat)</option><option value="Jazeera">জাজিরা (Jazeera)</option><option value="Naria">নড়িয়া (Naria)</option><option value="Shariatpur Sadar">শরীয়তপুর সদর (Shariatpur Sadar)</option><option value="Shakhipur">সখিপুর (Shakhipur)</option>'
    }
    if (DisList == 'Tangail') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Basail">বাসাইল (Basail)</option><option value="Bhuapur">ভুয়াপুর (Bhuapur)</option><option value="Delduar">দেলদুয়ার (Delduar)</option><option value="Dhanbari">ধনবাড়ী (Dhanbari)</option><option value="Ghatail">ঘাটাইল (Ghatail)</option><option value="Gopalpur">গোপালপুর (Gopalpur)</option><option value="Kalihati">কালাহাতি (Kalihati)</option><option value="Madhupur">মধুপুর (Madhupur)</option><option value="Mirzapur">মির্জাপুর (Mirzapur)</option><option value="Nagarpur">নাগরপুর (Nagarpur)</option><option value="Shakhipur">সখিপুর  (Shakhipur)</option><option value="Tangail">টাঙ্গাইল সদর (Tangail)</option>'
    }
    //Khulna Division

    if (DisList == 'Bagerhat') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Bagerhat Sadar">বাগেরহাট সদর (Bagerhat Sadar)</option><option value="Chitalmari">চিতলমারী (Chitalmari)</option><option value="Fakirhat">ফকিরহাট (Fakirhat)</option><option value="Kachua">কচুয়া (Kachua)</option><option value="Mollahat">মোল্লাহাট (Mollahat)</option><option value="Mongla">মোংলা (Mongla)</option><option value="Morrelganj">মোড়েলগঞ্জ (Morrelganj)</option><option value="Sarankhola">শরণখোলা (Sarankhola)</option>'
    }
    if (DisList == 'Chuadanga') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Alamdanga ">আলমডাঙ্গা (Alamdanga)</option><option value="Chuadanga Sadar">চুয়াডাঙ্গা সদর (Chuadanga Sadar)</option><option value="Damurhuda">দামুড়হুদা (Damurhuda)</option><option value="Darsana">দর্শনা (Darsana)</option><option value="Jibannagar">জীবননগর (Jibannagar)</option>'
    }
    if (DisList == 'Jashore') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Abhaynagar ">অভয়নগর (Abhaynagar)</option><option value="Bagherpara">বাঘারপাড়া (Bagherpara)</option><option value="Chaugachha ">চৌগাছা (Chaugachha)</option><option value="Jashore Sadar">যশোর সদর (Jashore Sadar)</option><option value="Jhikargacha">ঝিকরগাছা (Jhikargacha)</option><option value="Keshabpur">কেশবপুর (Keshabpur)</option><option value="Manirampur">মনিরামপুর (Manirampur)</option><option value="Sharsha">শার্শা (Sharsha)</option>'
    }
    if (DisList == 'Jhenaidah') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Abhaynagar ">অভয়নগর (Abhaynagar)</option><option value="Bagherpara">বাঘারপাড়া (Bagherpara)</option><option value="Chaugachha ">চৌগাছা (Chaugachha)</option><option value="Jashore Sadar">যশোর সদর (Jashore Sadar)</option><option value="Jhikargacha">ঝিকরগাছা (Jhikargacha)</option><option value="Keshabpur">কেশবপুর (Keshabpur)</option><option value="Manirampur">মনিরামপুর (Manirampur)</option><option value="Sharsha">শার্শা (Sharsha)</option>'
    }
    if (DisList == 'Jhenaidah') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Harinakundu">হরিণাকুণ্ড (Harinakundu)</option><option value="Jhenaidah Sadar">ঝিনাইদহ সদর (Jhenaidah Sadar)</option><option value="Kaliganj">কালীগঞ্জ (Kaliganj)</option><option value="Kotchandpur">কোটচাঁদপুর (Kotchandpur)</option><option value="Maheshpur">মহেশপুর (Maheshpur)</option><option value="Shailkupa">শৈলকুপা (Shailkupa)</option>'
    }
    if (DisList == 'Khulna') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Batiaghata">বটিয়াঘাটা (Batiaghata)</option><option value="Dacope">দাকোপ (Dacope)</option><option value="Dighalia">দিঘলিয়া (Dighalia)</option><option value="Dumuria">ডুমুরিয়া (Dumuria)</option><option value="Koyra">কয়রা (Koyra)</option><option value="Paikgachha">পাইকগাছা (Paikgachha)</option><option value="Phultala">ফুলতলা (Phultala)</option><option value="Rupsha">রূপসা (Rupsha)</option><option value="Terokhada">তেরখাদা (Terokhada)</option>'
    }
    if (DisList == 'Kustia') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Bheramara">ভেড়ামারা (Bheramara)</option><option value="Daulatpur">দৌলতপুর (Daulatpur)</option><option value="Khoksa">খোকসা (Khoksa)</option><option value="Kumarkhali">কুমারখালি (Kumarkhali)</option><option value="Kushtia Sadar">কুষ্টিয়া সদর (Kushtia Sadar)</option>'
    }
    if (DisList == 'Magura') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Magura Sadar">মাগুরা সদর (Magura Sadar)</option><option value="Mohammadpur">মহম্মদপুর (Mohammadpur)</option><option value="Shalikha">শালিখা (Shalikha)</option><option value="Sreepur">শ্রীপুর (Sreepur)</option>'
    }
    if (DisList == 'Meherpur') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Meherpur Sadar">মেহেরপুর সদর (Meherpur Sadar)</option><option value="Mujibnagar">মুজিবনগর (Mujibnagar)</option><option value="Gangni">গাংনী (Gangni)</option>'
    }
    if (DisList == 'Narail') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Lohagara">লোহাগড়া (Lohagara)</option><option value="Kalia">কালিয়া (Kalia)</option><option value="Narail Sadar">নড়াইল সদর (Narail Sadar)</option>'
    }
    if (DisList == 'Satkhira') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Assasuni">আশাশুনি (Assasuni)</option><option value="Debhata">দেবহাটা (Debhata)</option><option value="Kalaroa">কলারোয়া (Kalaroa)</option><option value="Kaliganj">কালীগঞ্জ (Kaliganj)</option><option value="Satkhira Sadar">সাতক্ষীরা সদর (Satkhira Sadar)</option><option value="Shyamnagar">শ্যামনগর (Shyamnagar)</option><option value="Tala">তালা (Tala)</option>'
    }
    //Mymensingh Division

    if (DisList == 'Mymensingh') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Bhaluka">ভালুকা (Bhaluka)</option><option value="Dhobaura">ধোবাউড়া (Dhobaura)</option><option value="Fulbaria">ফুলবাড়িয়া (Fulbaria)</option><option value="Gafargaon">গফরগাঁও (Gafargaon)</option><option value="Gauripur">গৌরীপুর (Gauripur)</option><option value="Haluaghat">হালুয়াঘাট (Haluaghat)</option><option value="Ishwarganj">ঈশ্বরগঞ্জ (Ishwarganj)</option><option value="Muktagacha">মুক্তাগাছা (Muktagacha)</option><option value="Mymensingh Sadar">ময়মনসিংহ সদর (Mymensingh Sadar)</option><option value="Nandail">নান্দাইল (Nandail)</option><option value="Phulpur">ফুলপুর (Phulpur)</option><option value="Tarakanda">তারাকান্দা (Tarakanda)</option><option value="Trishal">ত্রিশাল (Trishal)</option>'
    }
    if (DisList == 'Netrokona') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Atpara">আটপাড়া (Atpara)</option><option value="Barhatta">বারহাট্টা (Barhatta)</option><option value="Durgapur">দূর্গাপুর (Durgapur)</option><option value="Kendua">কেন্দুয়া (Kendua)</option><option value="Khaliajuri">খা‌লিয়াজুরী (Khaliajuri)</option><option value="Kolmkakanda">কমলাকান্দা (Kolmkakanda)</option><option value="Modon">মদন (Modon)</option><option value="Mohangonj">মোহনগঞ্জ (Mohangonj)</option><option value="Netrokona Sadar">নেত্রকোণা সদর (Netrokona Sadar)</option><option value="Purbodhola">পূর্বধলা (Purbodhola)</option>'
    }
    if (DisList == 'Jamalpur') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Bakshiganj">বকশীগঞ্জ (Bakshiganj)</option><option value="Dewanganj">দেওয়ানগঞ্জ (Dewanganj)</option><option value="Islampur">ইসলামপুর (Islampur)</option><option value="Jamalpur Sadar">জামালপুর সদর(Jamalpur Sadar)</option><option value="Madarganj">মাদারগঞ্জ (Madarganj)</option><option value="Melandaha">মেলান্দহ (Melandaha)</option><option value="Sharishabari">সরিষাবাড়ী (Sharishabari)</option>'
    }
    if (DisList == 'Sherpur') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Jhenaigati">ঝিনাইগাতী (Jhenaigati)</option><option value="Nakla">নকলা (Nakla)</option><option value="Nalitabari">নালিতাবাড়ি (Nalitabari)</option><option value="Sherpur Sadar">শেরপুর সদর (Sherpur Sadar)</option><option value="Sreebardi">শ্রীবর্দী (Sreebardi)</option>'
    }

    //Rajshahi Division
    if (DisList == 'Bagura') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Adamdighi">আদমদিঘী (Adamdighi)</option><option value="Bagura Sadar">বগুড়া সদর  (Bagura Sadar)</option><option value="Dhunat">ধুনট (Dhunat)</option><option value="Dupchanchia">দুপচাচিয়া (Dupchanchia)</option><option value="Gabtali">গাবতলী (Gabtali)</option><option value="Kahaloo">কাহালু (Kahaloo)</option><option value="Nandigram">নন্দিগ্রাম (Nandigram)</option><option value="Sahajanpur">শাহাজাহানপুর (Sahajanpur)</option><option value="Sariakandi">সারিয়াকান্দি (Sariakandi)</option><option value="Sherpur">শেরপুর (Sherpur)</option><option value="Shibganj">শিবগঞ্জ (Shibganj)</option><option value="Sonatala">সোনাতলা (Sonatala)</option>'
    }
    if (DisList == 'Chapainawabganj') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Bholahat">ভোলাহাট (Bholahat)</option><option value="Chapainawabganj Sadar">চাঁপাইনবাবগঞ্জ সদর  (Chapainawabganj Sadar)</option><option value="Gomastapur">গোমস্তাপুর (Gomastapur)</option><option value="Shibganj">শিবগঞ্জ (Shibganj)</option>'
    }
    if (DisList == 'Joypurhat') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Akkelpur">আক্কেলপুর (Akkelpur)</option><option value="Joypurhat Sadar">জয়পুরহাট সদর (Joypurhat Sadar)</option><option value="Kalai">কালাই (Kalai)</option><option value="Khetlal">খেতলাল (Khetlal)</option><option value="Panchbibi">পাঁচবিবি (Panchbibi)</option>'
    }
    if (DisList == 'Naogaon') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Atrai">আত্রাই (Atrai)</option><option value="Badalgachhi">বদলগাছি (Badalgachhi)</option><option value="Dhamoirhat">ধামইরহাট (Dhamoirhat)</option><option value="Manda">মান্দা (Manda)</option><option value="Mohadevpur">মহাদেবপুর (Mohadevpur)</option><option value="Naogaon Sadar">নওগাঁ সদর (Naogaon Sadar)</option><option value="Niamatpur">নিয়ামতপুর (Niamatpur)</option><option value="Patnitala">পত্মীতলা (Patnitala)</option><option value="Porsha">পোরশা (Porsha)</option><option value="Raninagar">রানীনগর (Raninagar)</option><option value="Sapahar">সাপাহার (Sapahar)</option>'
    }
    if (DisList == 'Natore') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Bagatipara">বাগাতিপাড়া (Bagatipara)</option><option value="Baraigram">বড়াইগ্রাম (Baraigram)</option><option value="Gurudaspur">গুরুদাসপুর (Gurudaspur)</option><option value="Lalpur">লালপুর (Lalpur)</option><option value="Natore Sadar">নাটোর সদর (Natore Sadar)</option><option value="Naldanga">নলডাঙ্গা (Naldanga)</option><option value="Singra">সিংড়া (Singra)</option>'
    }
    if (DisList == 'Pabna') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Atgharia">আটঘরিয়া (Atgharia)</option><option value="Bera">বেড়া (Bera)</option><option value="Bhangura">ভাঙ্গুরা (Bhangura)</option><option value="Chatmohar">চাটমোহর (Chatmohar)</option><option value="Faridpur">ফরিদপুর (Faridpur)</option><option value="Ishwardi">ঈশ্বরদী (Ishwardi)</option><option value="Pabna Sadar">পাবনা সদর (Pabna Sadar)</option><option value="Santhia">সাঁথিয়া (Santhia)</option><option value="Suzanagar">সুজানগর (Suzanagar)</option>'
    }
    if (DisList == 'Rajshahi') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Bagmara">বাগমারা (Bagmara)</option></option><option value="Bagha">বাঘা (Bagha)</option><option value="Boalia">বোয়ালিয়া (Boalia)</option><option value="Charghat">চারঘাট (Charghat)</option><option value="Durgapur">দুর্গাপুর (Durgapur)</option><option value="Godagari">গোদাগাড়ি (Godagari)</option><option value="Mohanpur">মোহনপুর (Mohanpur)</option><option value="Motihar">মতিহার (Motihar)</option><option value="Paba">পবা (Paba)</option><option value="Puthia">পুঠিয়া (Puthia)</option><option value="Rajpara">রাজপাড়া (Rajpara)</option><option value="Shah Makhdum">শাহ মখদুম (Shah Makhdum)</option><option value="Tanore">তানোর (Tanore)</option>'
    }
    if (DisList == 'Sirajganj') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Belkuchi">বেলকুচি (Belkuchi)</option><option value="Chauhali">চৌহালী (Chauhali)</option><option value="Kamarkhanda">কামারখন্দ (Kamarkhanda)</option><option value="Kazipur">কাজীপুর (Kazipur)</option><option value="Raiganj">রায়গঞ্জ (Raiganj)</option><option value="Shahjadpur">শাহজাদপুর (Shahjadpur)</option><option value="Sirajganj Sadar">সিরাজগঞ্জ সদর (Sirajganj Sadar)</option><option value="Tarash">তাড়াশ (Tarash)</option><option value="Ullapara">উল্লাপাড়া (Ullapara)</option>'
    }
    //Rangpur Division

    if (DisList == 'Dinajpur') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Biral">বিরল (Biral)</option><option value="Birampur">বিরামপুর (Birampur)</option><option value="Birganj">বীরগঞ্জ (Birganj)</option><option value="Bochaganj">বোঁচাগঞ্জ (Bochaganj)</option><option value="Chirirbandar">চিরিরবন্দর (Chirirbandar)</option><option value="Dinajpur Sadar">দিনাজপুর সদর (Dinajpur Sadar)</option><option value="Ghoraghat">ঘোড়াঘাট (Ghoraghat)</option><option value="Hakimpur">হাকিমপুর (Hakimpur)</option><option value="Kaharole">কাহারোল (Kaharole)</option><option value="Khansama">খানসামা (Khansama)</option><option value="Nawabganj">নবাবগঞ্জ (Nawabganj)</option><option value="Parbatipur">পার্বতীপুর (Parbatipur)</option><option value="Phulbari">ফুলবাড়ী (Phulbari)</option>'
    }
    if (DisList == 'Gaibandha') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Fulchhari">ফুলছড়ি (Fulchhari)</option><option value="Gaibandha Sadar">গাইবান্ধা সদর (Gaibandha Sadar)</option><option value="Gobindaganj">গোবিন্দগঞ্জ (Gobindaganj)</option><option value="Palashbari">পলাশবাড়ী (Palashbari)</option><option value="Sadullapur">সাদুল্লাপুর (Sadullapur)</option><option value="Saghata">সাঘাটা (Saghata)</option><option value="Sundarganj">সুন্দরগঞ্জ (Sundarganj)</option>'
    }
    if (DisList == 'Kurigram') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Bhurungamari">ভূরুঙ্গামারী (Bhurungamari)</option><option value="Char Rajibpur">চর রাজিবপুর (Char Rajibpur)</option><option value="Chilmari">চিলমারী (Chilmari)</option><option value="Kurigram Sadar">কুড়িগ্রাম সদর (Kurigram Sadar)</option><option value="Nageshwari">নাগেশ্বরী (Nageshwari)</option><option value="Phulbari">ফুলবাড়ী (Phulbari)</option><option value="Rajarhat">রাজারহাট (Rajarhat)</option><option value="Rowmari">রৌমারী (Rowmari)</option><option value="Ulipur">উলিপুর (Ulipur)</option>'
    }
    if (DisList == 'Lalmonirhat') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Aditmari">আদিতমারী (Aditmari)</option><option value="Hatibandha">হাতীবান্ধা (Hatibandha)</option><option value="Kaliganj">কালীগঞ্জ (Kaliganj)</option><option value="Lalmonirhat Sadar">লালমনিরহাট সদর (Lalmonirhat Sadar)</option><option value="Patgram">পাটগ্রাম (Patgram)</option>'
    }
    if (DisList == 'Nilphamari') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Dimla">ডিমলা (Dimla)</option><option value="Domar">ডোমার (Domar)</option><option value="Jaldhaka">জলঢাকা (Jaldhaka)</option><option value="Kishoreganj">কিশোরগঞ্জ (Kishoreganj)</option><option value="Nilphamari Sadar">নীলফামারী সদর (Nilphamari Sadar)</option><option value="Saidpur">সৈয়দপুর (Saidpur)</option>'
    }
    if (DisList == 'Panchagarh') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Atwari">আটোয়ারী (Atwari)</option><option value="Boda">বোদা (Boda)</option><option value="Debiganj">দেবীগঞ্জ (Debiganj)</option><option value="Panchagarh Sadar">পঞ্চগড় সদর (Panchagarh Sadar)</option><option value="Tetulia">তেঁতুলিয়া (Tetulia)</option>'
    }
    if (DisList == 'Rangpur') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Badarganj">বদরগঞ্জ (Badarganj)</option><option value="Gangachhara">গঙ্গাছড়া (Gangachhara)</option><option value="Kaunia">কাউনিয়া (Kaunia)</option><option value="Mithapukur">মিঠাপুকুর (Mithapukur)</option><option value="Pirgachha">পীরগাছা (Pirgachha)</option><option value="Pirganj">পীরগঞ্জ (Pirganj)</option><option value="Rangpur Sadar">রংপুর সদর (Rangpur Sadar)</option><option value="Taraganj">তারাগঞ্জ (Taraganj)</option>'
    }
    if (DisList == 'Thakurgaon') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Baliadangi">বালিয়াডাঙ্গী (Baliadangi)</option><option value="Haripur">হরিপুর (Haripur)</option><option value="Pirganj">পীরগঞ্জ (Pirganj)</option><option value="Ranisankail">রাণীশংকৈল (Ranisankail )</option><option value="Thakurgaon Sadar">ঠাকুরগাঁও সদর (Thakurgaon Sadar)</option>'
    }
    //Sylhet Division
    if (DisList == 'Habiganj') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Azmiriganj">আজমিরীগঞ্জ (Azmiriganj)</option><option value="Bahubal">বাহুবল (Bahubal)</option><option value="Baniachang">বানিয়াচং (Baniachang)</option><option value="Chunarughat">চুনারুঘাট (Chunarughat)</option><option value="Habiganj Sadar">হবিগঞ্জ সদর (Habiganj Sadar)</option><option value="Lakhai">লাখাই (Lakhai)</option><option value="Madhabpur">মাধবপুর (Madhabpur)</option><option value="Nabiganj">নবীগঞ্জ (Nabiganj)</option><option value="Shayestaganj">শায়েস্তাগঞ্জ (Shayestaganj)</option>'
    }
    if (DisList == 'Moulvibazar') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Barlekha">বড়লেখা (Barlekha)</option><option value="Juri">জুড়ী (Juri)</option><option value="Kamalganj">কমলগঞ্জ (Kamalganj)</option><option value="Kulaura">কুলাউড়া (Kulaura)</option><option value="Moulvibazar">মৌলভীবাজার (Moulvibazar)</option><option value="Rajnagar">রাজনগর (Rajnagar)</option><option value="Sreemongal">শ্রীমঙ্গল (Sreemongal)</option>'
    }
    if (DisList == 'Sunamganj') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Bishwamvarpur">বিশ্বম্ভরপুর (Bishwamvarpur)</option><option value="Chhatak">ছাতক (Chhatak)</option><option value="Derai">দিরাই (Derai)</option><option value="Dharampasha">ধরমপাশা (Dharampasha)</option><option value="Dowarabazar">দোয়ারাবাজার (Dowarabazar)</option><option value="Jagannathpur">জগন্নাথপুর (Jagannathpur)</option><option value="Jamalganj">জামালগঞ্জ (Jamalganj)</option><option value="Shantiganj-South Sunamganj">শান্তিগঞ্জ-দক্ষিণ সুনামগঞ্জ (Shantiganj-South Sunamganj)</option><option value="Sulla">শাল্লা (Sulla)</option><option value="Sunamganj">সুনামগঞ্জ (Sunamganj)</option><option value="Tahirpur">তাহিরপুর (Tahirpur)</option>'
    }
    if (DisList == 'Sylhet') {
        var thanaList = '<option disabled selected>Select Thana</option><option value="Balaganj">বালাগঞ্জ (Balaganj)</option><option value="Beanibazar">বিয়ানিবাজার (Beanibazar)</option><option value="Bimanbondar">বিমানবন্দর (Bimanbondar)</option><option value="Bishwanath">বিশ্বনাথ (Bishwanath)</option><option value="Companiganj">কোম্পানীগঞ্জ (Companiganj)</option><option value="Fenchuganj">ফেঞ্চুগঞ্জ (Fenchuganj)</option><option value="Golapganj">গোলাপগঞ্জ (Golapganj)</option><option value="Gowainghat">গোয়াইনঘাট (Gowainghat)</option><option value="Jaintiapur">জৈন্তাপুর (Jaintiapur)</option><option value="Jalalabad">জালালাবাদ (Jalalabad)</option><option value="Kanaighat">কানাইঘাট (Kanaighat)</option><option value="Kotwali">কোতয়ালী (Kotwali)</option><option value="Maglabazar">মগলাবাজার (Maglabazar)</option><option value="Osmani Nagar">ওসমানী নগর (Osmani Nagar)</option><option value="Shahporan">শাহপরান (Shahporan)</option><option value="South Shurma">দক্ষিণ সুরমা (South Shurma)</option><option value="Sylhet Sadar">সিলেট সদর (Sylhet Sadar)</option><option value="Zakiganj">জকিগঞ্জ (Zakiganj)</option>'
    }
    document.getElementById("thana").innerHTML = thanaList;
}
