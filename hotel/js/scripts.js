// what is the path to the JSON file?
const apiURL = 'hoteldata.json';

//Go fetch it and then wait for a response.
fetch(apiURL).then((response) => response.json()).then((myList) => {
	//Once it comes back, display it to the console.
	console.log(myList);

	for (i = 0; i < myList.length; i++) {
		//console.log(i)

		//Figure elements
		let myImageTag = document.createElement('img');
		myImageTag.src = myList[i].photo;

		let myCaptionTag = document.createElement('figcaption');
		myCaptionTag.textContent = myList[i].name;

		//appending child into one element
		let myFigureTag = document.createElement('figure');
		myFigureTag.appendChild(myImageTag);
		myFigureTag.appendChild(myCaptionTag);

		//information elements
		let theIconLeftTag = document.createElement('ion-icon');
    theIconLeftTag.slot = 'icon-only';
		theIconLeftTag.name = 'car-sport-outline';

		let theAddress1Tag = document.createElement('p');
		theAddress1Tag.textContent = myList[i].address[0];

		let theAddress2Tag = document.createElement('p');
		theAddress2Tag.textContent = myList[i].address[1];

		let theIconRightTag = document.createElement('ion-icon');
    theIconRightTag.slot = 'icon-only';
		theIconRightTag.name = 'call-outline';

		let thePhoneTag = document.createElement('p');
		thePhoneTag.textContent = myList[i].phone;

		//span element
		let mySpan1Tag = document.createElement('span');
		mySpan1Tag.appendChild(theIconLeftTag);
		mySpan1Tag.appendChild(theAddress1Tag);
		mySpan1Tag.appendChild(theAddress2Tag);

    let mySpan2Tag = document.createElement('span');
		mySpan2Tag.appendChild(theIconRightTag);
		mySpan2Tag.appendChild(thePhoneTag);

  //div element
    let myDivTag = document.createElement ('div');
    myDivTag.className = 'infoWrapper'
    myDivTag.appendChild(mySpan1Tag);
    myDivTag.appendChild(mySpan2Tag);

    //appending child into one element
    let mySectionTag = document.createElement('section');
    mySectionTag.appendChild(myFigureTag)
    mySectionTag.appendChild(myDivTag);

		//Documenting on site
		document.getElementById('myCards').appendChild(mySectionTag);
	}
}); //end of "then" fat arrow function

