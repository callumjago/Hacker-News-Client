import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-options',
  templateUrl: './search-options.component.html',
  styleUrls: ['./search-options.component.css']
})
export class SearchOptionsComponent implements OnInit {
  @Input() refreshData: Function;
  @Input() setPage: Function;
  @Input() setPageSize: Function;
  @Input() setTitle: Function;
  @Input() page: number;
  @Input() pageSize: number;
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

  pageDown() {
    if (this.page > 1) {
      this.setPage(this.page - 1);
      this.refreshData();
    }
  }

  pageUp() {
    this.setPage(this.page + 1);
    this.refreshData();
  }

  setPageSizeAndRefresh(newPageSize: number) {
    this.setPageSize(newPageSize);
    this.refreshData();
  }
}
