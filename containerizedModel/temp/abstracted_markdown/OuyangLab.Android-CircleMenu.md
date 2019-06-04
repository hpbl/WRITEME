# CircleMenu

�Զ���ViewGroupʵ�ֵ�Բ����ת�˵���֧�ָ�����ָ��ת�Լ�������ת�� ͼ���������á�

# �÷�

@abstr_number �������ļ��������ؼ�
    
    
    <com.zhy.view.CircleMenuLayout
        android:id="@+id/id_menulayout"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:padding=" @abstr_number dp"
        android:background="@drawable/circle_bg @abstr_number " >
    </com.zhy.view.CircleMenuLayout>
    

@abstr_number ��Activity��onCreate��|Fragment��onCreateView��
    
    
    public class CircleActivity extends Activity
    {
        private CircleMenuLayout mCircleMenuLayout;
    
        private String[] mItemTexts = new String[] { "��ȫ���� ", "��ɫ����", "Ͷ�����",
                "ת�˻��", "�ҵ��˻�", "���ÿ�" };
        private int[] mItemImgs = new int[] { R.drawable.home_mbank_ @abstr_number _normal,
                R.drawable.home_mbank_ @abstr_number _normal, R.drawable.home_mbank_ @abstr_number _normal,
                R.drawable.home_mbank_ @abstr_number _normal, R.drawable.home_mbank_ @abstr_number _normal,
                R.drawable.home_mbank_ @abstr_number _normal };
    
        @Override
        protected void onCreate(Bundle savedInstanceState)
        {
            super.onCreate(savedInstanceState);
    
            //�����л������ļ���Ч��
            setContentView(R.layout.activity_main @abstr_number );
    
            mCircleMenuLayout = (CircleMenuLayout) findViewById(R.id.id_menulayout);
            mCircleMenuLayout.setMenuItemIconsAndTexts(mItemImgs, mItemTexts);
        }
    
    }
    

@abstr_number ����ӵ���¼�
    
    
    mCircleMenuLayout.setOnMenuItemClickListener(new OnMenuItemClickListener()
    {
        @Override
        public void itemClick(View view, int pos)
        {
            Toast.makeText(CircleActivity.this, mItemTexts[pos],
                    Toast.LENGTH_SHORT).show();
    
        }
        @Override
        public void itemCenterClick(View view)
        {
            Toast.makeText(CircleActivity.this,
                    "you can do something just like ccb  ",
                    Toast.LENGTH_SHORT).show();
        }
    });
    

# Ч��ͼ

CircleMenuSample

@abstr_image 

CCBSample ע��ǧ�������Ϊʲô��һ�飬���о��������ġ�

@abstr_image 

# ������

@abstr_hyperlink 
