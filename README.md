# Introduction

Users will be able to input their location details gradually starting from

**Division -> District->Constituency->Administration->Upazila->Thana**

A simple html form with Select tag is associated in this method. The next Select field label will be depend on the current value of the Select label.
Logic has been implemented using JavaScript.

# Demo

<p align="center"><b>Sample Form</b></p>


![Form](https://i.ibb.co/QM1x0N9/1.png)

<p align="center"><b>Division Select</b></p>

![Division](https://i.ibb.co/wsRPChR/2.png)

<p align="center"><b>District Select</b></p>

![District](https://i.ibb.co/ccSZJjh/3.png)

<p align="center"><b>Constituency Select</b></p>

![enter image description here](https://i.ibb.co/1JQdn35/4.png)

<p align="center"><b>Administration Select</b></p>

![enter image description here](https://i.ibb.co/9sKVR59/5.png)

<p align="center"><b>Upazila Select</b></p>

![enter image description here](https://i.ibb.co/cXZX3tj/6.png)

<p align="center"><b>Thana Select</b></p>

![enter image description here](https://i.ibb.co/gtQ2fVg/7.png)
# HTML

    <label  for="division"  class="block text-gray-600 font-semibold mb-2">বিভাগ</label>

    <select  name="division"  id="division"  onchange="divisionsList();"
    
    class="bg-gray-100 border-2 w-full p-2 rounded-lg @error('division') border-red-500 @enderror">
    
    <option  value=""  disabled  selected>Select Division</option>
    
    <option  value="Barishal">বরিশাল (Barishal)</option>
    
    <option  value="Chattogram">চট্টগ্রাম (Chattogram)</option>
    
    <option  value="Dhaka">ঢাকা (Dhaka)</option>
    
    <option  value="Khulna">খুলনা (Khulna)</option>
    
    <option  value="Mymensingh">ময়মনসিংহ (Mymensingh)</option>
    
    <option  value="Rajshahi">রাজশাহী (Rajshahi)</option>
    
    <option  value="Rangpur">রংপুর (Rangpur)</option>
    
    <option  value="Sylhet">সিলেট (Sylhet)</option>
    </select>

## JavaScript Function

    function  divisionsList() {
    
    // get value from division lists
    
    var  diviList  =  document.getElementById('division').value;
    
      
    
    // set barishal division districts
    
    if (diviList  ==  'Barishal') {
    
    var  disctList  =  '<option disabled selected>Select District</option><option value="Barguna">বরগুনা (Barguna)</option><option value="Barishal">বরিশাল (Barishal)</option><option value="Bhola">ভোলা (Bhola)</option><option value="Jhalokati">ঝালকাঁঠি (Jhalokati)</option><option value="Patuakhali">পটুয়াখালী (Patuakhali)</option><option value="Pirojpur">পিরোজপুর (Pirojpur)</option>';
    
    }
    
    // set Chattogram division districts
    
    else  if (diviList  ==  'Chattogram') {
    
    var  disctList  =  '<option disabled selected>Select District</option><option value="Bandarban">বান্দরবান (Bandarban)</option><option value="Brahmanbaria">ব্রাহ্মণবাড়িয়া (Brahmanbaria)</option><option value="Chandpur">চাঁদপুর (Chandpur)</option><option value="Chattogram">চট্টগ্রাম (Chattogram)</option><option value="Cumilla">কুমিল্লা (Cumilla)</option><option value="Cox\'s Bazar">কক্সবাজার (Cox\'s Bazar)</option><option value="Feni">ফেনী (Feni)</option><option value="Khagrachhari">খাগড়াছড়ি (Khagrachhari)</option><option value="Lakshmipur">লক্ষ্মীপুর (Lakshmipur) </option><option value="Noakhali">নোয়াখালী (Noakhali)</option><option value="Rangamati">রাঙ্গামাটি (Rangamati)</option>';
    
    }
    
    
    // set/send districts name to District lists from division
    
    document.getElementById("district").innerHTML  =  disctList;
    
    }

## Usage

Attach the JS script to HTML form to use the functions.
```
<script  src="js/location.js"></script>
```

