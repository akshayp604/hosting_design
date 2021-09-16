import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgebaseListComponent } from './knowledgebase-list.component';

describe('KnowledgebaseListComponent', () => {
  let component: KnowledgebaseListComponent;
  let fixture: ComponentFixture<KnowledgebaseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowledgebaseListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgebaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
