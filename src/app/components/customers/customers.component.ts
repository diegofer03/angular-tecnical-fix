import { Component, ViewChild } from '@angular/core';
import { faAngleLeft, faAngleRight, faPlus } from '@fortawesome/free-solid-svg-icons';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

interface Customer {
  title: string;
  date: Date;
  text: string;
  image: string;
}

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent {
  faAngleLeft = faAngleLeft;
  faPlus = faPlus
  faAngleRight = faAngleRight;

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: false,
    scrollbar: { draggable: true },
    loop: true,
  };

  customers: Customer[] = [
    {
      title: 'Oasis provides a robust synopsis of our service statuses',
      date: new Date(2022, 1, 1),
      text: `Iterative approaches to corporate strategy foster collaborative
  thinking to further the overall value proposition.`,
      image: 'assets/images/customer-1-small.webp',
    },
    {
      title: 'Oasis has brought clarity to our architecture',
      date: new Date(2022, 3, 1),
      text: `Iterative approaches to corporate strategy foster collaborative
      thinking to further the overall value proposition.`,
      image: 'assets/images/customer-2-small.webp',
    },
  ];

  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  constructor() {}

  slideNext() {
    this.swiper?.swiperRef?.slideNext();
  }
  slidePrev() {
    this.swiper?.swiperRef?.slidePrev();
  }

  calcTimeAgo(date: Date) {
    const today = new Date()
    var diff = Math.floor(today.getTime() - date.getTime());
    var day = 1000 * 60 * 60 * 24;

    var days = Math.floor(diff/day);
    var months = Math.floor(days/31);
    var years = Math.floor(months/12);

    var message = date.toDateString();
    message += " was "
    message += days + " days "
    message += months + " months "
    message += years + " years ago \n"


    return  `${months} months ago`
  }
}
