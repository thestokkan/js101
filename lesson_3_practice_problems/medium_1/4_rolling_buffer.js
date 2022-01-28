// Question 4
//
// Alyssa was asked to write an implementation of a rolling buffer. You can add and remove elements from a rolling buffer. However, once the buffer becomes full, any new elements will displace the oldest elements in the buffer.
//
// She wrote two implementations of the code for adding elements to the buffer. In presenting the code to her team leader, she said "Take your pick. Do you prefer push() or concat() for modifying the buffer?".
//
// Is there a difference between these implementations, other than the method she used to add an element to the buffer?


function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

// Yes, the methods are different in how they affect the original buffer.
// In the first implementation, `push` mutates the original buffer array passed in as an argument to the function. In the second implementation, the function parameter is reassigned the return value of `concat`, which does not affect the original buffer. The return values of the two operations are the same.
