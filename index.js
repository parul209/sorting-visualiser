const container = document.querySelector(".data-container");

// function to generate bars
function generatebars(num = 20) {
	
//for loop to generate 20 bars
for (let i = 0; i < num; i += 1) {

	// To generate random values from 1 to 100
	const value = Math.floor(Math.random() * 100) + 1;
	
	// To create element "div"
	const bar = document.createElement("div");

	// To add class "bar" to "div"
	bar.classList.add("bar");

	// Provide height to the bar
	bar.style.height = `${value * 3}px`;

	// Translate the bar towards positive X axis
	bar.style.transform = `translateX(${i * 30}px)`;
	
	// To create element "label"
	const barLabel = document.createElement("label");

	// To add class "bar_id" to "label"
	barLabel.classList.add("bar_id");

	// Assign value to "label"
	barLabel.innerHTML = value;
	
	// Append "Label" to "div"
	bar.appendChild(barLabel);

	// Append "div" to "data-container div"
	container.appendChild(bar);
}
}


// asynchronous function to perform "Selection Sort"
async function SelectionSort(delay = 300) {
let bars = document.querySelectorAll(".bar");
// Assign 0 to min_idx
var min_idx = 0;
for (var i = 0; i < bars.length; i += 1) {

	// Assign i to min_idx
	min_idx = i;

	// Provide darkblue color to the ith bar
	bars[i].style.backgroundColor = "darkblue";
	for (var j = i + 1; j < bars.length; j += 1) {

	// Provide red color to the jth bar
	bars[j].style.backgroundColor = "red";
		
	// To pause the execution of code for 300 milliseconds
	await new Promise((resolve) =>
		setTimeout(() => {
		resolve();
		}, 300)
	);

	// To store the integer value of jth bar to var1
	var val1 = parseInt(bars[j].childNodes[0].innerHTML);

	// To store the integer value of (min_idx)th bar to var2
	var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);
		
	// Compare val1 & val2
	if (val1 < val2) {
		if (min_idx !== i) {

		// Provide skyblue color to the (min-idx)th bar
		bars[min_idx].style.backgroundColor = " rgb(24, 190, 255)";
		}
		min_idx = j;
	} else {

		// Provide skyblue color to the jth bar
		bars[j].style.backgroundColor = " rgb(24, 190, 255)";
	}
	}

	// To swap ith and (min_idx)th bar
	var temp1 = bars[min_idx].style.height;
	var temp2 = bars[min_idx].childNodes[0].innerText;
	bars[min_idx].style.height = bars[i].style.height;
	bars[i].style.height = temp1;
	bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
	bars[i].childNodes[0].innerText = temp2;
	
	// To pause the execution of code for 300 milliseconds
	await new Promise((resolve) =>
	setTimeout(() => {
		resolve();
	}, 300)
	);

	// Provide skyblue color to the (min-idx)th bar
	bars[min_idx].style.backgroundColor = " rgb(24, 190, 255)";

	// Provide lightgreen color to the ith bar
	bars[i].style.backgroundColor = " rgb(49, 226, 13)";
}
// To enable the button "Generate New Array" after final(sorted)
document.getElementById("Button1").disabled = false;
document.getElementById("Button1").style.backgroundColor = "#6f459e";

// To enable the button "Selection Sort" after final(sorted)
document.getElementById("Button2").disabled = false;
document.getElementById("Button2").style.backgroundColor = "#6f459e";
}

// Call "generatebars" function
generatebars();

// function to generate new random array
function generate()
{
window.location.reload();
}

// function to disable the button
function disable()
{
// To disable the button "Generate New Array"
document.getElementById("Button1").disabled = true;
document.getElementById("Button1").style.backgroundColor = "#d8b6ff";

// To disable the button "Selection Sort"
document.getElementById("Button2 ").disabled = true;
document.getElementById("Button2").style.backgroundColor = "#d8b6ff";

document.getElementById("Button3").disabled = true;
document.getElementById("Button3").style.backgroundColor = "#d8b6ff";
document.getElementById("Button4")
.disabled = true;
document.getElementById("Button4")
.style.backgroundColor = "#d8b6ff";


}







async function BubbleSort(delay = 300) {
	var bars = document.querySelectorAll(".bar");

	// BubbleSort Algorithm
	for (var i = 0; i < bars.length; i += 1) {
		for (var j = 0; j < bars.length - i - 1; j += 1) {

			// To change background-color of the
			// bars to be compared
			bars[j].style.backgroundColor = "#FF4949";
			bars[j + 1].style.backgroundColor = "#FF4949";

			// To wait for .1 sec
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, 300)
			);

		
			var value1 = parseInt(bars[j].childNodes[0].innerHTML);
			var value2 = parseInt(bars[j + 1]
						.childNodes[0].innerHTML);

			// To compare value of two bars
			if (value1 > value2) {
				var temp1 = bars[j].style.height;
	var temp2 = bars[j].childNodes[0].innerText;
	bars[j].style.height = bars[j+1].style.height;
	bars[j+1].style.height = temp1;
	bars[j].childNodes[0].innerText = bars[j+1].childNodes[0].innerText;
	bars[j+1].childNodes[0].innerText = temp2;
				
			}
			await new Promise((resolve) =>
	setTimeout(() => {
		resolve();
	}, 300)
	);


			// Changing the color to the previous one
			bars[j].style.backgroundColor = "rgb(24, 190, 255)";
			bars[j + 1].style.backgroundColor = "rgb(24, 190, 255)";
		}

		//changing the color of greatest element
		//found in the above traversal
		bars[bars.length - i - 1]
				.style.backgroundColor = "#13CE66";
	}
   
	document.getElementById("Button1").disabled = false;
	document.getElementById("Button1").style.backgroundColor = "#6f459e";
	
	// To enable the button "Selection Sort" after final(sorted)
	document.getElementById("Button3").disabled = false;
	document.getElementById("Button3").style.backgroundColor = "#6f459e";

}


// Asynchronous function to perform "Insertion Sort"
async function InsertionSort(delay = 600) {
let bars = document.querySelectorAll(".bar");

// Provide lightgreen colour to 0th bar
bars[0].style.backgroundColor = " rgb(49, 226, 13)";
for (var i = 1; i < bars.length; i += 1) {

	// Assign i-1 to j
	var j = i - 1;

	// To store the integer value of ith bar to key
	var key =
	parseInt(bars[i].childNodes[0].innerHTML);

	// To store the ith bar height to height
	var height = bars[i].style.height;
	
	// For selecting section having id "ele"
	

	
	//Provide darkblue color to the ith bar
	bars[i].style.backgroundColor = "darkblue";
	
	// To pause the execution of code for 600 milliseconds
	await new Promise((resolve) =>
	setTimeout(() => {
	resolve();
	}, 600)
);

	// For placing selected element at its correct position
	while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > key) {
		
	// Provide darkblue color to the jth bar
	bars[j].style.backgroundColor = "darkblue";
		
	// For placing jth element over (j+1)th element
	var temp1 = bars[j].style.height;
	var temp2 = bars[j].childNodes[0].innerText;
	bars[j].style.height = bars[j+1].style.height;
	bars[j+1].style.height = temp1;
	bars[j].childNodes[0].innerText = bars[j+1].childNodes[0].innerText;
	bars[j+1].childNodes[0].innerText = temp2;
	

	// Assign j-1 to j
	j = j - 1;

	// To pause the execution of code for 600 milliseconds
	await new Promise((resolve) =>
		setTimeout(() => {
		resolve();
		}, 600)
	);
		
	// Provide lightgreen color to the sorted part
	for(var k=i;k>=0;k--){
		bars[k].style.backgroundColor = " rgb(49, 226, 13)";
	}
	}

	// Placing the selected element to its correct position
	bars[j + 1].style.height = height;
	bars[j + 1].childNodes[0].innerHTML = key;
	
	// To pause the execution of code for 600 milliseconds
	await new Promise((resolve) =>
	setTimeout(() => {
		resolve();
	}, 600)
	);
	
	// Provide light green color to the ith bar
	bars[i].style.backgroundColor = " rgb(49, 226, 13)";
}


	
// To enable the button
// "Generate New Array" after final(sorted)
document.getElementById("Button1")
.disabled = false;
document.getElementById("Button1")
.style.backgroundColor = "#6f459e";

// To enable the button
// "Insertion Sort" after final(sorted)
document.getElementById("Button4")
.disabled = false;
document.getElementById("Button4")
.style.backgroundColor = "#6f459e";
}




async function lometo_partition(l, r, delay = 700) {
var bars = document.querySelectorAll(".bar");

// Storing the value of pivot element
var pivot =
Number(bars[r].childNodes[0].innerHTML);
var i = l - 1;
bars[r].style.backgroundColor = "red";
// document.getElementsByClassName("range")[0].innerText = `[${l},${r}]`;


for (var j = l; j <= r - 1; j++) {
	// To change background-color of the
	// bars to be compared
	bars[j].style.backgroundColor = "yellow";
	// To wait for 700 milliseconds
	await new Promise((resolve) =>
	setTimeout(() => {
		resolve();
	}, delay)
	);
	var value =
	Number(bars[j].childNodes[0].innerHTML);

	// To compare value of two bars
	if (value < pivot) {
	i++;
	var temp1 = bars[i].style.height;
	var temp2 = bars[i].childNodes[0].innerText;
	bars[i].style.height = bars[j].style.height;
	bars[j].style.height = temp1;
	bars[i].childNodes[0].innerText =
	bars[j].childNodes[0].innerText;
	bars[j].childNodes[0].innerText = temp2;
	bars[i].style.backgroundColor = "orange";
	if (i != j) bars[j].style.backgroundColor = "pink";
	//To wait for 700 milliseconds
	await new Promise((resolve) =>
		setTimeout(() => {
		resolve();
		}, delay)
	);
	} else bars[j].style.backgroundColor = "pink";
}
// Swapping the ith with pivot element
i++;
var temp1 = bars[i].style.height;
var temp2 = bars[i].childNodes[0].innerText;
bars[i].style.height = bars[r].style.height;
bars[r].style.height = temp1;
bars[i].childNodes[0].innerText =
bars[r].childNodes[0].innerText;
bars[r].childNodes[0].innerText = temp2;
bars[r].style.backgroundColor = "pink";
bars[i].style.backgroundColor = "green";

// To wait for 2100 milliseconds
await new Promise((resolve) =>
	setTimeout(() => {
	resolve();
	}, delay * 3)
);

for (var k = 0; k < 20; k++)
bars[k].style.backgroundColor = " rgb(49, 226, 13)";
return i;
}

// Asynchronous QuickSort function
async function QuickSort(l, r, delay = 100) {
if (l < r) {
	// Storing the index of pivot element after partition
	var pivot_idx = await lometo_partition(l, r);
	// Recursively calling quicksort for left partition
	await QuickSort(l, pivot_idx - 1);
	// Recursively calling quicksort for right partition
	await QuickSort(pivot_idx + 1, r);
}
document.getElementById("Button1")
.disabled = false;
document.getElementById("Button1")
.style.backgroundColor = "#6f459e";

// To enable the button
// "Insertion Sort" after final(sorted)
document.getElementById("Button5")
.disabled = false;
document.getElementById("Button5")
.style.backgroundColor = "#6f459e";
}


























async function mergeArray(start, end) {
	var bars = document.querySelectorAll(".bar");
	bars[end].style.backgroundColor = "red";
    let mid = parseInt((start + end) >> 1);
    let start1 = start, start2 = mid + 1
    let end1 = mid, end2 = end
     
    // Initial index of merged subarray
    let index = start
 
    while (start1 <= end1 && start2 <= end2) {
        if (arr[start1] <= arr[start2]) {
            itmd[index] = arr[start1]
            index = index + 1
            start1 = start1 + 1;
        }
        else if(arr[start1] > arr[start2]) {
            itmd[index] = arr[start2]
            index = index + 1
            start2 = start2 + 1;
        }
    }
 
    // Copy the remaining elements of
    // arr[], if there are any
    while (start1 <= end1) {
        itmd[index] = arr[start1]
        index = index + 1
        start1 = start1 + 1;
    }
 
    while (start2 <= end2) {
        itmd[index] = arr[start2]
        index = index + 1
        start2 = start2 + 1;
    }
 
    index = start
    while (index <= end) {
        arr[index] = itmd[index];
        index++;
    }
}
async function mergeSort(start,end) {
	if (start < end) {
        let mid = parseInt((start + end) >> 1)
        await mergeSort(start, mid)
        await mergeSort(mid + 1, end)
        await mergeArray(start, end)
     
        // Waiting time is 800ms
        await new Promise((resolve) =>
	setTimeout(() => {
		resolve();
	}, 800));
    }


	document.getElementById("Button1")
	.disabled = false;
	document.getElementById("Button1")
	.style.backgroundColor = "#6f459e";
	
	// To enable the button
	// "Insertion Sort" after final(sorted)
	document.getElementById("Button6")
	.disabled = false;
	document.getElementById("Button6")
	.style.backgroundColor = "#6f459e";
	}


