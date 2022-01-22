//input 上面传送下来
//使用 @Output() 装饰器和 EventEmitter() 的实例定义一个名为 notify 的属性 触发事件
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  @Input() productInput!: Product | undefined;
  // 注意 他的事件实际上在父组件采取行动
  @Output() notify = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
