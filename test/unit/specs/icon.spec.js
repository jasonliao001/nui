import { createVue, destroyVM } from '../../util';
describe('Icon', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });
  it('create', done => {
    vm = createVue(`<Icon type='logo-github'></Icon>`);
    // expect(vm.$el.querySelectorAll('.ion-icon')).to.equal(2);
    vm.$nextTick(_ => {
      // console.log(vm.$el.querySelector('.ivu-breadcrumb-item-separator').innerHTML);
      expect(vm.$el.className).to.equal('ion-icon ion-logo-github');
      done();
    });
  });
});
