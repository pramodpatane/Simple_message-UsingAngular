import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project2';

  storedPost = [];
  
  onPostAdded(post) {
    this.storedPost.push(post);
  }
}
