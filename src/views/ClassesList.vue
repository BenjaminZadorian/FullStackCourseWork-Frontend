<template>
  <div class="container py-5">
    <h1 class="text-center mb-4">Available Classes</h1>
    
  </div>
  <!-- <i class="fa-solid fa-music"></i> -->
</template>

<script setup>
// Temp test data for classes before backend is implemented
  const classes = [
    { id: 1, Subject: 'Music', Location: 'London', Price: 10.00, Spaces: 5, icon: 'fa-solid fa-music' },
    { id: 2, Subject: 'Art', Location: 'Manchester', Price: 12.00, Spaces: 8, icon: 'fa-solid fa-paintbrush'},
    { id: 3, Subject: 'Cooking', Location: 'Birmingham', Price: 15.00, Spaces: 6, icon: 'fa-solid fa-utensils' },
    { id: 4, Subject: 'Dance', Location: 'Leeds', Price: 8.00, Spaces: 7, icons: 'fa-solid fa-person-dress'},
    { id: 5, Subject: 'Photography', Location: 'Liverpool', Price: 20.00, Spaces: 5, icon: 'fa-solid fa-camera' },
    { id: 6, Subject: 'Gym', Location: 'Newcastle', Price: 18.00, Spaces: 6, icon: 'fa-solid fa-dumbbell'},
    { id: 7, Subject: 'Programming', Location: 'Sheffield', Price: 25.00, Spaces: 9, icon: 'fa-sold fa-code'},
    { id: 8, Subject: 'Writing', Location: 'Bristol', Price: 14.00, Spaces: 10, icon: 'fa-solid fa-pen-nib'},
    { id: 9, Subject: 'Design & Technology', Location: 'Nottingham', Price: 11.00, Spaces: 5, icon: 'fa-solid fa-object-ungroup'},
    { id: 10, Subject: 'History', Location: 'Cardiff', Price: 9.00, Spaces: 7, icon: 'fa-solid fa-landmark' }
  ]
</script>

<!--  
there should be at least 10 lessons, and each lesson should have 5
spaces (or availability) -- DONE

each lesson should have at least (5%): Subject (1%), Location (1%),
Price (1%), Spaces (or availability: this indicates how many spaces are
left) (1%), a Font Awesome icon (or an Image) (1%) -- DONE

v-for must be used for the display of the lesson list

SORTING FUNCTIONALITY
-------------------------
the user can choose to sort the lessons by one of the following attributes
(8%): subject (2%), location (2%), price (2%), or spaces (i.e. availability)
(2%)

there must be an option to sort in ascending or descending order (order
dependent on the sorting attribute selected), which should work for each
of the attributes (2%)

 -->