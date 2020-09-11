def insertNodeAtPosition(head, data, position):
  SinglyLinkedListNode(data)
  if position == 0:
    new.next = head
    head=new
    return head
  ptr=head
  c=1
  while ptr.next is not None:
    if c == position:
      new.next = ptr.next
      ptr.next = new
      break
    c+=1
    ptr=ptr.next
 return head
