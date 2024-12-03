let Emailpattern = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
let Namepattern = /[a-zA-Z]$/;

export function checkName(data, valid) {
  if (!data) {
    valid(true);
    return false;
  } else if (!Namepattern.test(data)) {
    valid(true);
    return false;
  } else {
    valid(false);
    return true;
  }
}

export function checkEmail(data, valid) {
  if (!data) {
    valid(true);
    return false;
  } else if (!Emailpattern.test(data)) {
    valid(true);
    return false;
  } else {
    valid(false);
    return true;
  }
}

export function checkDob(data, valid) {
  let PresentDate = new Date();
  let getdateData = new Date(data.split("-"));
  let ageValue = PresentDate - getdateData;
  let yr = 1000 * 60 * 60 * 24 * 365;
  // console.log(ageValue/yr)
  let getAge = Math.floor(ageValue / yr);
  if (!data) {
    valid(true);
    return false;
  } else if ((getAge < 0)) {
    valid(true);
    return false;
  } else {
    valid(false);
    return true;
  }
}

export function checkAge(data) {
  let PresentDate = new Date();
  let getdateData = new Date(data.split("-"));
  let ageValue = PresentDate - getdateData;
  let yr = 1000 * 60 * 60 * 24 * 365;
  // console.log(ageValue/yr)
  let getAge = Math.floor(ageValue / yr);
  // console.log(getAge)
  if (getAge >= 0) {
    //valid(false);
    return getAge;
  } else {
    //valid(true);
    return getAge;
  }
}

export function checkDetail(data, valid) {
  if (!data) {
    valid(true);
    return false;
  } else if (data.length < 10 || data.length > 200) {
    valid(true);
    return false;
  } else {
    valid(false);
    return true;
  }
  // console.log(details.value.length)
}
