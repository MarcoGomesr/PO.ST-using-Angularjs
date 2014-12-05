PO.ST-using-Angularjs
=====================

Using the sharing platform  PO.ST with Angularjs directive

#Getting Started


Include the script in your html file.


    <script src="bower_components/angular-socialshare/angular-socialshare.min.js"></script>
Add to your APP's dependency.

    angular.module('testing',['social'])


and put and your code the atributte social and your publishkey

    <div class="pw-widget pw-counter-none" social data-key='piar45n5874gushtcib4'>
      <a class="pw-button-facebook pw-look-native"></a>
      <a class="pw-button-twitter pw-look-native"></a>
      <a class="pw-button-googleplus pw-look-native"></a>
      <a class="pw-button-pinterest pw-look-native"></a>
      <a class="pw-button-post-share"></a>
    </div>   


see a <a href="http://plnkr.co/edit/71J7WU62KoAlquENFhvS?p=preview">demo</a>
